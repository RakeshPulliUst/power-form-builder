import { BSelect as BaseSelect } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";

type Props = {
  data: Element;
  onChange: any;
};

const Select = ({ data, onChange }: Props) => {
  return (
    <BaseSelect
      label={data.label!}
      placeholder={data.placeholder!}
      menuItems={data.menuItems!}
      //multiple={data.multipleValues!}
      //name={data.label?.toLocaleLowerCase()}
      onChange={onChange}
      // size={
      //   data.size !== undefined
      //     ? data.size === "small"
      //       ? "small"
      //       : "medium"
      //     : "medium"
      // }
      //required={data.validate?.required!}
      width={data.width}
    />
  );
};

export default Select;
