import { TextField } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

const TextFieldRender = ({ data, onChange }: Props) => {
  return (
    <TextField
      label={data.label!}
      name={data.label?.toLocaleLowerCase()}
      placeholder={data.placeholder}
      required={data.required!}
      inputProps={{
        minLength: data.minLength!,
        maxLength: data.maxLength!,
      }}
      sx={{ mt: 2 }}
      variant={"outlined"}
      onChange={onChange}
    />
  );
};

export default TextFieldRender;
