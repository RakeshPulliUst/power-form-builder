import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePicker as DefaultDatePicker,
  DatePickerProps as DefaultDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps extends DefaultDatePickerProps<Date> {}

const DatePicker = ({ ...rest }: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DefaultDatePicker label="Basic date picker" {...rest} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
