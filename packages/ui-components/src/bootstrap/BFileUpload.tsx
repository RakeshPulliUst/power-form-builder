import { Form } from "react-bootstrap";

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (files: FileList | null) => void;
}

const BFileUpload = ({ label, name, onChange }: FileUploadProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onChange(files);
  };

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="file" name={name} onChange={handleFileChange} />
    </Form.Group>
    
  );
};

export default BFileUpload;
