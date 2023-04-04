import { TextField } from "@power-form-builder/ui-components";
import React, { useState } from "react";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

const EmailRender = ({ data, onChange }: Props) => {
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(event.target.value)) {
      setEmailHelperText("");
      setEmailError(false);
    } else {
      setEmailHelperText("Please enter a valid email address");
      setEmailError(true);
    }

    if (onChange) {
      onChange(event);
    }
  };
  return (
    <TextField
      label={data.label!}
      name={data.label?.toLocaleLowerCase()}
      type="email"
      placeholder={data.placeholder}
      required={data.validate?.required}
      inputProps={{
        minLength: data.validate?.minLength!,
        maxLength: data.validate?.maxLength!,
        pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$",
      }}
      helperText={emailHelperText}
      error={emailError}
      sx={{ mt: 2 }}
      variant={"outlined"}
      onChange={handleEmailChange}
    />
  );
};

export default EmailRender;
