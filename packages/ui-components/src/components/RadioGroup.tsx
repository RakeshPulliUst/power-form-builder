import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup as DefaultRadioGroup,
  RadioGroupProps as DefaultRadioGroupProps,
  Radio,
} from "@mui/material";

interface RadioGroupProps extends DefaultRadioGroupProps {
  label: string;
  required: boolean;
  options: "end" | "start" | "top" | "bottom";
  radioItems: {
    radioButtonDataLabel: string;
    radioButtonDataValue: string;
  }[];
  name?: string;
}

function RadioGroup({
  label,
  required,
  options,
  radioItems,
  name,
  ...rest
}: RadioGroupProps) {
  return (
    <FormControl required={required}>
      <FormLabel id="radio-button">{label}</FormLabel>
      <DefaultRadioGroup row name={name} {...rest}>
        {radioItems.map((item, index) => (
          <FormControlLabel
            labelPlacement={options}
            value={item.radioButtonDataValue}
            control={<Radio name={name} size="small" color="secondary" />}
            label={item.radioButtonDataLabel}
          />
        ))}
      </DefaultRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
