import { BDatePicker as BaseDatePicker } from "@power-form-builder/ui-components";
import { Element } from "../../../../form-builder/ElementInterface";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  data: Element;
  onChange: any;
  selected: Date | null | undefined;
};

const DatePicker = ({ data, onChange, selected }: Props) => {
  return (
    <BaseDatePicker
      label={data.label!}
      selected={selected}
      name={data.key!}
      dateFormat={data.format!}
      // disableFuture={data.disableFuture!}
      // disablePast={data.disablePast!}
      // minDate={data.validate?.minDate?.toDate()}
      // maxDate={data.validate?.maxDate?.toDate()}
      onChange={onChange}
    />
  );
};

export default DatePicker;
