import { Checkbox as BaseCheckbox } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";
import { ChangeEvent } from "react";

type Props = {
  data: Element;
  onChange:
    | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
};

const Checkbox = ({ data, onChange }: Props) => {
  return (
    <BaseCheckbox
      label={data.label!}
      name={data.label!}
      required={data.validate?.required}
      defaultChecked={data.default}
      onChange={onChange}
    />
  );
};

export default Checkbox;
