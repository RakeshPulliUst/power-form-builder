import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Checkbox as DefaultCheckbox,
  CheckboxProps as DefaultCheckBoxProps,
} from "@mui/material";

interface CheckboxProps extends DefaultCheckBoxProps {
  label: string;
}

const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <FormControlLabel control={<DefaultCheckbox {...rest} />} label={label} />
  );
};
export default Checkbox;
