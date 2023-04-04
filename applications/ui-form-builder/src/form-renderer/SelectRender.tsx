import { Select } from "@power-form-builder/ui-components";
import { Element } from "../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange: any;
};

const SelectRender = ({ data, onChange }: Props) => {
  return (
    <Select
      label={data.label!}
      placeholder={data.placeholder!}
      menuItems={data.menuItems!}
      multiple={data.multipleValues!}
      name={data.label?.toLocaleLowerCase()}
      onChange={onChange}
      size={
        data.size !== undefined
          ? data.size === "small"
            ? "small"
            : "medium"
          : "medium"
      }
      required={data.validate?.required!}
      width={data.width}
    />
  );
};

export default SelectRender;
