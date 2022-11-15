import { TextareaAutosize } from "@mui/material";
import React from "react";

type Props = {
    placeholder: string,
    width: number
    required: boolean
    type?: React.HTMLInputTypeAttribute
};

const MuiTextArea = (props: Props) => {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder={props.placeholder}
      minRows={3}
      style={{ width: props.width, marginTop: 20 }}
      required = {props.required}
    />
  );
};

export default MuiTextArea;
