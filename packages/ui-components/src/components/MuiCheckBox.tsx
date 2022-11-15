import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {
    label: string,
    required: boolean
};

const MuiCheckBox = (props: Props) => {

  return (
    <FormControlLabel
      control={
        <Checkbox name="checkbox" required={props.required}/>
      }
      label={props.label}
    />
  );
};

export default MuiCheckBox;
