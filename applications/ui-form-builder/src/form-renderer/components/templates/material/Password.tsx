import { TextField } from "@power-form-builder/ui-components";
import React, { useState } from "react";
import { Element } from "../../../../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

const Password = ({ data, onChange }: Props) => {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (regex.test(event.target.value)) {
      setPasswordHelperText("");
      setPasswordError(false);
    } else {
      setPasswordHelperText(
        "Password should contain upper" + "lower case, number, special letter"
      );
      setPasswordError(true);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextField
      label={data.label!}
      name={data.label?.toLocaleLowerCase()}
      type="password"
      onChange={handlePasswordChange}
      placeholder={data.placeholder}
      required={data.validate?.required!}
      inputProps={{
        minLength: data.validate?.minLength!,
        maxLength: data.validate?.maxLength!,
        pattern:
          "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      }}
      helperText={passwordHelperText}
      error={passwordError}
      sx={{ mt: 2 }}
      variant={"outlined"}
    />
  );
};

export default Password;
