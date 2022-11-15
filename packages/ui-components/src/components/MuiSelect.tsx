import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

type Props = {
  label: string;
  multiple: boolean;
  size: "small" | "medium";
  required: boolean;
  menuItems: {
    label: string;
    value: string;
  }[];
};

const MuiSelect = (props: Props) => {
  const [values, setValues] = useState<string[]>([]);
  console.log(values);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValues(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <TextField
      label={props.label}
      select
      SelectProps={{
        multiple: props.multiple,
      }}
      size={props.size}
      color="secondary"
      value={values}
      onChange={handleChange}
      required={props.required}
      fullWidth
    >
      {props.menuItems.map((item, index) => (
        <MenuItem value={item.value}>{item.label}</MenuItem>
      ))}
    </TextField>
  );
};

export default MuiSelect;
