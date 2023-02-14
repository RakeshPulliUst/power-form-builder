import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as DefaultSelect, SelectChangeEvent } from "@mui/material";

type Props = {
  label: string;
  multiple: boolean;
  menuItems: {
    selectDataLabel: string;
    selectDataValue: string;
  }[];
  placeholder: string;
  value?: string[];
  textFieldWidth?: number;
  name?: string;
  required: boolean;
  size: "small" | "medium";
  width?: number;
  onChange?: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
};

const Select = ({
  label,
  value,
  menuItems,
  multiple,
  placeholder,
  required,
  size,
  width,
  name,
  onChange,
  ...rest
}: Props) => {
  // const [selectItems, setSelectItems] = React.useState<string[]>(value);
  // const handleChange = (event: SelectChangeEvent<typeof selectItems>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setSelectItems(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <FormControl sx={{ m: 1, width: width }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <DefaultSelect
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple={multiple}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          style: {
            width: width,
          },
        }}
        placeholder={placeholder}
        name={name}
        required={required}
        size={size}
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
