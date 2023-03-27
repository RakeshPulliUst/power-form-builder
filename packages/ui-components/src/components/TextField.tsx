import React from "react";
import {
  TextField as DefaultTextField,
  StandardTextFieldProps,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
} from "@mui/material";

type TextFieldProps =
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps;

const TextField = React.forwardRef(({ ...rest }: TextFieldProps, ref) => {
  return <DefaultTextField {...rest} inputRef={ref} />;
});

export default TextField;
