import { TextField, MenuItem } from "@mui/material";

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
  width?: number;
  name?: string;
};

const TextFieldSelect = ({
  label,
  multiple,
  size,
  required,
  menuItems,
  placeholder,
  onChange,
  values,
  defaultValue,
  width,
  name,
  ...rest
}: Props) => {
  return (
    <TextField
      label={label}
      select
      SelectProps={{
        multiple: multiple,
      }}
      size={size}
      color="secondary"
      value={values}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      style={{ width: width, margin: 1 }}
      {...rest}
    >
      {menuItems.map((item, index) => (
        <MenuItem value={item.selectDataValue}>{item.selectDataLabel}</MenuItem>
      ))}
    </TextField>
  );
};

export default TextFieldSelect;
