import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps extends ReactDatePickerProps {
  label: string;
  name: string;
}

const BDatePicker = ({ name, label, ...rest }: DatePickerProps) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <DatePicker className="form-control" name={name} {...rest} />
    </Form.Group>
  );
};

export default BDatePicker;
