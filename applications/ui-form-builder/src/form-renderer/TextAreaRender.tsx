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
      name={data.label?.toLocaleLowerCase()}
      placeholder={data.placeholder!}
      required={data.validate?.required!}
      inputProps={{
        minLength: data.validate?.minLength!,
        maxLength: data.validate?.maxLength!,
      }}
      sx={{ mt: 2 }}
      variant={"outlined"}
      onChange={onChange}
      rows={data.validate?.rows}
      multiline={true}
    />
  );
};

export default TextAreaRender;
