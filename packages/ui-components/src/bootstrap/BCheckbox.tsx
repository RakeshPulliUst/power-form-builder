import { Form, FormCheckProps as DefaultFormCheckProps } from "react-bootstrap";

interface FormCheckProps extends DefaultFormCheckProps {}

const BCheckbox = ({ ...rest }: FormCheckProps) => {
  return <Form.Check type="checkbox" {...rest} />;
};
export default BCheckbox;
