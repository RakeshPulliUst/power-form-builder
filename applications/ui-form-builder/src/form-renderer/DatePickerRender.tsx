import { DatePicker } from "@power-form-builder/ui-components";
import { Element } from "../form-builder/ElementInterface";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  data: Element;
  onChange: any;
};

const DatePickerRender = ({ data, onChange }: Props) => {
  return (
    <DatePicker
      label={data.label!}
      format={data.format!}
      disableFuture={data.disableFuture!}
      disablePast={data.disablePast!}
      minDate={dayjs(data.validate?.minDate)}
      maxDate={dayjs(data.validate?.maxDate)}
      onChange={onChange}
    />
  );
};

export default DatePickerRender;
