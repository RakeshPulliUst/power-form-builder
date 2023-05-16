import { DatePicker as BaseDatePicker } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  data: Element;
  onChange: any;
};

const DatePicker = ({ data, onChange }: Props) => {
  return (
    <BaseDatePicker
      label={data.label!}
      //name={data.key}
      format={data.format!}
      disableFuture={data.disableFuture!}
      disablePast={data.disablePast!}
      minDate={data.validate?.minDate}
      maxDate={data.validate?.maxDate}
      onChange={onChange}
    />
  );
};

export default DatePicker;
