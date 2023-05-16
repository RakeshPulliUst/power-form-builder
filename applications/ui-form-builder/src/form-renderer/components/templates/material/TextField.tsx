import { TextField as BaseTextField } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../../../../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

const TextField = ({ data, onChange }: Props) => {
  return (
    <BaseTextField
      label={data.label!}
      name={data.key}
      placeholder={data.placeholder}
      required={data.validate?.required!}
      inputProps={{
        minLength: data.validate?.minLength!,
        maxLength: data.validate?.maxLength!,
      }}
      sx={{ mt: 2 }}
      variant={"outlined"}
      onChange={onChange}
    />
  );
};

export default TextField;
