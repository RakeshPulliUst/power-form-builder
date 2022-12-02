import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  label: string;
  required: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  checked: boolean;
  defaultChecked: boolean;
};

const MuiCheckBox = (props: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name="checkbox"
          onChange={props.onChange}
          checked={props.checked}
          required={props.required}
          defaultChecked={props.defaultChecked}
        />
      }
      label={props.label}
    />
  );
};

export default MuiCheckBox;
