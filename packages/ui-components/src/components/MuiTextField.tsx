import React, { useState } from "react";
import { TextField } from "@mui/material";

type Props = {
  label: string;
  name?: string;
  required: boolean;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  arg?: string | number;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  ref?: (instance: HTMLDivElement | null) => void;
};

const MuiTextField = (props: Props) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      required={props.required}
      variant="standard"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      inputProps={{ maxLength: props.maxLength, minLength: props.minLength }}
    />

    /* <TextField
      label={props.label}
      placeholder={props.placeholder}
      required={props.required}
      variant="standard"
      type={props.type}
      onChange={props.onChange}
      inputProps={{ maxLength: props.maxLength, minLength: props.minLength }}
      helperText={
        !props.value ? "Required" : "Do not share your password with anyone"
      }
       ref="password"
    />*/
  );
};

export default MuiTextField;
