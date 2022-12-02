import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
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
};

function MuiRadioButton(props: Props) {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl required={props.required}>
      <FormLabel id="radio-button">{props.label}</FormLabel>
      <RadioGroup
        row
        name="radio-button `{props.label}`"
        value={value}
        onChange={handleChange}
      >
        {props.radioItems.map((item, index) => (
          <FormControlLabel
            labelPlacement={props.options}
            value={item.radioButtonDataValue}
            control={<Radio size="small" color="secondary" />}
            label={item.radioButtonDataLabel}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default MuiRadioButton;
