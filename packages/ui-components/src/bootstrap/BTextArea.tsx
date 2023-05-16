import { Form } from "react-bootstrap";

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const BTextArea = ({
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
}: TextAreaProps) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default BTextArea;
