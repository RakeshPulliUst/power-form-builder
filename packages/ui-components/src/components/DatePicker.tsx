import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DefaultDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

type DatePickerProps = {
  label: string;
  format?: string;
  value?: dayjs.Dayjs | null | undefined;
  onChange?: any;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate?: any;
  maxDate?: any;
  required?: boolean;
};

const DatePicker = ({
  label,
  format,
  value,
  onChange,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  required,
}: DatePickerProps) => {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DefaultDatePicker
          label={label}
          value={value}
          onChange={onChange}
          format={format}
          disableFuture={disableFuture}
          disablePast={disablePast}
          minDate={minDate}
          maxDate={maxDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
