import { Button, FileUpload, Stack } from "@power-form-builder/ui-components";
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

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("file", selectedFile);

    // Make an API request to upload the file
    fetch("http://localhost:4000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("Failed to upload file");
        }
      })
      .catch((error) => {
        console.error("Failed to upload file", error);
      });
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
