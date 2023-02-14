import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox as DefaultCheckbox } from "@mui/material";

type Props = {
  label: string;
  required: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  value?: string;
};

const Checkbox = ({
  label,
  required,
  onChange,
  checked,
  defaultChecked,
  name,
  value,
  ...rest
}: Props) => {
  return (
    <FormControlLabel
      control={
        <DefaultCheckbox
          name={name}
          onChange={onChange}
          checked={checked}
          required={required}
          defaultChecked={defaultChecked}
          value={value}
          {...rest}
        />
      }
      label={label}
    />
  );
};
export default Checkbox;
