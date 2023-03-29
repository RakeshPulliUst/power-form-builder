import { TextField } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  emailError?: boolean;
  emailHelperText?: string;
};

const EmailRender = ({
  data,
  onChange,
  emailError,
  emailHelperText,
}: Props) => {
  return (
    <TextField
      label={data.label!}
      name={data.label?.toLocaleLowerCase()}
      type="email"
      placeholder={data.placeholder}
      required={data.required!}
      inputProps={{
        minLength: data.minLength!,
        maxLength: data.maxLength!,
      }}
      helperText={emailHelperText}
      error={emailError}
      sx={{ mt: 2 }}
      variant={"outlined"}
      onChange={onChange}
    />
  );
};

export default EmailRender;
