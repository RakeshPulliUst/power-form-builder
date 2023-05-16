import { BCheckbox as BaseCheckbox } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";
import { ChangeEvent } from "react";

type Props = {
  data: Element;
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  checked: boolean;
};

const Checkbox = ({ data, onChange, checked }: Props) => {
  return (
    <BaseCheckbox
      label={data.label!}
      name={data.key}
      checked={checked}
      required={data.validate?.required}
      onChange={onChange}
    />
  );
};

export default Checkbox;
