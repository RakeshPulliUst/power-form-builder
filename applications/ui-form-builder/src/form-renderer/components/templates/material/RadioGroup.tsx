import { RadioGroup as BaseRadioGroup } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";
import { ChangeEvent } from "react";

type Props = {
  data: Element;
  onChange:
    | ((event: ChangeEvent<HTMLInputElement>, value: string) => void)
    | undefined;
};

const RadioGroup = ({ data, onChange }: Props) => {
  return (
    <BaseRadioGroup
      label={data.label!}
      options={
        data.options !== undefined
          ? data.options === "top"
            ? "top"
            : data.options === "bottom"
            ? "bottom"
            : data.options === "start"
            ? "start"
            : "end"
          : "end"
      }
      name={data.label?.toLocaleLowerCase()}
      radioItems={data.radioItems!}
      required={data.validate?.required!}
      onChange={onChange}
    />
  );
};

export default RadioGroup;
