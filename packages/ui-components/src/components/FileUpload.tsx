import React from "react";
import { Button, Stack } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

const FileUpload = () => {
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
      <Button variant="contained" component="label" startIcon={<CloudUpload />}>
        Select File
        <input type="file" hidden onChange={handleFileSelect} />
      </Button>
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

export default FileUpload;
