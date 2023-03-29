import { Checkbox } from "@power-form-builder/ui-components";
import { Element } from "../form-builder/ElementInterface";
import { ChangeEvent } from "react";

type Props = {
  data: Element;
  onChange:
    | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
};

const CheckboxRender = ({ data, onChange }: Props) => {
  return (
    <Checkbox
      label={data.label!}
      name={data.label!}
      required={data.required!}
      defaultChecked={data.default}
      onChange={onChange}
    />
  );
};

export default CheckboxRender;
