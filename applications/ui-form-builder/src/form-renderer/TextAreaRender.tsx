import { TextField } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

const TextAreaRender = ({ data, onChange }: Props) => {
  return (
    <TextField
      label={data.label!}
      required={data.required!}
      placeholder={data.placeholder!}
      name={data.label?.toLocaleLowerCase()}
      onChange={onChange}
      inputProps={{
        minLength: data.minLength!,
        maxLength: data.maxLength!,
      }}
      rows={data.rows}
      multiline={true}
      sx={{ mt: 2 }}
      variant={"outlined"}
    ></TextField>
  );
};

export default TextAreaRender;
