import { TextareaAutosize } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  width: string | number;
  required: boolean;
  minRows: string | number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  name?: string;
};

const MuiTextArea = (props: Props) => {
  return (
    <>
      <label>{props.label}</label>
      <br />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder={props.placeholder}
        minRows={props.minRows}
        style={{ width: props.width, marginTop: 20 }}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </>
  );
};

export default MuiTextArea;
