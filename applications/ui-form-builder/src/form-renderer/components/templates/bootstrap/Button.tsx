import { Button as BaseButton } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../../../../form-builder/ElementInterface";

type Props = {
  data: Element;
};

const Button = ({ data }: Props) => {
  return (
    <BaseButton
      color={
        data.theme !== undefined
          ? data.theme === "primary"
            ? "primary"
            : data.theme === "secondary"
            ? "secondary"
            : data.theme === "info"
            ? "info"
            : data.theme === "success"
            ? "success"
            : data.theme === "warning"
            ? "warning"
            : data.theme === "error"
            ? "error"
            : "inherit"
          : "warning"
      }
      size={
        data.size !== undefined
          ? data.size === "small"
            ? "small"
            : data.size === "medium"
            ? "medium"
            : "large"
          : "medium"
      }
    >
      {data.label}
    </BaseButton>
  );
};

export default Button;
