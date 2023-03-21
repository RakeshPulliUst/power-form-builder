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

const TextField = ({ ...rest }: TextFieldProps) => {
  return <DefaultTextField {...rest} />;
};

export default TextField;
