import { TextField } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  passwordError?: boolean;
  passwordHelperText?: string;
};

const PasswordRender = ({
  data,
  onChange,
  passwordError,
  passwordHelperText,
}: Props) => {
  return (
    <TextField
      label={data.label!}
      name="{data.label?.toLocaleLowerCase()}"
      type="password"
      onChange={onChange}
      placeholder={data.placeholder}
      required={data.required!}
      inputProps={{
        minLength: data.minLength!,
        maxLength: data.maxLength!,
      }}
      helperText={passwordHelperText}
      error={passwordError}
      sx={{ mt: 2 }}
      variant={"outlined"}
    />
  );
};

export default PasswordRender;
