import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  Select as DefaultSelect,
  SelectProps as DefaultSelectProps,
} from "@mui/material";

interface SelectProps extends DefaultSelectProps {
  label: string;
  menuItems: {
    selectDataLabel: string;
    selectDataValue: string;
  }[];
  placeholder: string;
  width?: number;
}

const Select = ({
  label,
  menuItems,
  placeholder,
  width,
  ...rest
}: SelectProps) => {
  return (
    <FormControl sx={{ m: 1, width: width }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <DefaultSelect
        input={<OutlinedInput label={label} />}
        MenuProps={{
          style: {
            width: width,
          },
        }}
        placeholder={placeholder}
        {...rest}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {menuItems.map((name, index) => (
          <MenuItem key={name.selectDataLabel} value={name.selectDataValue}>
            {name.selectDataValue}
          </MenuItem>
        ))}
      </DefaultSelect>
    </FormControl>
  );
};

export default Select;
