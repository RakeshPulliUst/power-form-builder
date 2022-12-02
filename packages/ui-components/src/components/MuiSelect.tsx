import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

type Props = {
  label: string;
  multiple: boolean;
  size: "small" | "medium";
  required: boolean;
  menuItems: {
    selectDataLabel: string;
    selectDataValue: string;
  }[];
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[] | string;
  defaultValue?: string | number | boolean;
};

const MuiSelect = (props: Props) => {
  return (
    <TextField
      label={props.label}
      select
      SelectProps={{
        multiple: props.multiple,
      }}
      size={props.size}
      color="secondary"
      value={props.values}
      onChange={props.onChange}
      required={props.required}
      placeholder={props.placeholder}
      fullWidth
      defaultValue={props.defaultValue}
    >
      {props.menuItems.map((item, index) => (
        <MenuItem value={item.selectDataValue}>{item.selectDataLabel}</MenuItem>
      ))}
    </TextField>
  );
};

export default MuiSelect;
