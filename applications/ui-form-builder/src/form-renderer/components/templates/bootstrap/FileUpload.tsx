import { ChangeEvent, useState } from "react";
import {
  BFileUpload,
  BButton as Button,
} from "@power-form-builder/ui-components";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);

  const handleFileSelect = (files: FileList | null) => {
    setSelectedFile(files);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("file", selectedFile[0]);

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
    <>
      <BFileUpload label="FileUpload" name="dfdf" onChange={handleFileSelect} />
      <Button variant="primary" disabled={!selectedFile} onClick={handleUpload}>
        Upload
      </Button>
    </>
  );
};

export default FileUpload;
