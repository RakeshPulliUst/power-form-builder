import {
  Button,
  FileUpload,
  Stack,
} from "@power-form-builder/ui-components";
import { ChangeEvent, useState } from "react";


type Props = {
  onChange: any;
};

const FileUploadRender = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file!);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }

    // handle file upload logic here
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <FileUpload name={"dfdf"} required={true} onChange={handleFileSelect} />
      <Button
        variant="contained"
        disabled={!selectedFile}
        onClick={handleUpload}
      >
        Upload
      </Button>
      {selectedFile && <span>{selectedFile.name}</span>}
    </Stack>
  );
};

export default FileUploadRender;
