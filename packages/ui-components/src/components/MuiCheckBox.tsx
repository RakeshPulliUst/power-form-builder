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
  name?: string;
  value?: string;
};

const MuiCheckBox = (props: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={props.name}
          onChange={props.onChange}
          checked={props.checked}
          required={props.required}
          defaultChecked={props.defaultChecked}
          value={props.value}
        />
      }
      label={props.label}
    />
  );
};

export default MuiCheckBox;
