import React, { useState } from "react";
import { TextField as DefaultTextField } from "@mui/material";

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
  helperText?: string;
  error?: boolean;
};

const TextField = ({
  label,
  name,
  required,
  type,
  value,
  onChange,
  arg,
  placeholder,
  minLength,
  maxLength,
  ref,
  helperText,
  error,
  ...rest
}: Props) => {
  return (
    <DefaultTextField
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      inputProps={{ maxLength: maxLength, minLength: minLength }}
      helperText={helperText}
      error={error}
      {...rest}
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

export default TextField;
