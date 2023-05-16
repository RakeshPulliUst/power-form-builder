import { BButton as BaseButton } from "@power-form-builder/ui-components";
import React from "react";
import { Element } from "../../../../form-builder/ElementInterface";

type Props = {
  data: Element;
};

const Button = ({ data }: Props) => {
  return (
    <BaseButton
      name={data.key}
      variant={
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
            : data.theme === "light" //light and dark are in react-boostrap
            ? "light"
            : "dark"
          : "primary"
      }
      size="sm"
    >
      {data.label}
    </BaseButton>
  );
};
//
export default Button;
