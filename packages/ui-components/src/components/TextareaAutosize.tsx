import { TextareaAutosize as DefaultTextareaAutosize } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  width: number;
  required: boolean;
  minRows: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  name?: string;
};

const TextareaAutosize = ({
  label,
  placeholder,
  width,
  required,
  minRows,
  value,
  onChange,
  name,
  ...rest
}: Props) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <DefaultTextareaAutosize
        aria-label="empty textarea"
        placeholder={placeholder}
        minRows={minRows}
        style={{ width: width, marginTop: 20 }}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        {...rest}
      />
    </>
  );
};

export default TextareaAutosize;
