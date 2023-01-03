import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup as DefaultRadioGroup,
  Radio,
} from "@mui/material";

import React from "react";

type Props = {
  label: string;
  required: boolean;
  options: "end" | "start" | "top" | "bottom";
  radioItems: {
    radioButtonDataLabel: string;
    radioButtonDataValue: string;
  }[];
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
};

function RadioGroup({
  label,
  required,
  options,
  radioItems,
  name,
  onChange,
  value,
  ...rest
}: Props) {
  // const [value, setValue] = useState("");
  // console.log(value);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <FormControl required={required}>
      <FormLabel id="radio-button">{label}</FormLabel>
      <DefaultRadioGroup row name={name} value={value} onChange={onChange} {...rest}>
        {radioItems.map((item, index) => (
          <FormControlLabel
            labelPlacement={options}
            value={item.radioButtonDataValue}
            control={<Radio name={name} size="small" color="secondary" />}
            label={item.radioButtonDataLabel}
          />
        ))}
      </DefaultRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
