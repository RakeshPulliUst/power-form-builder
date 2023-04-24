import React from "react";
import { Button, Stack } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { Input, InputProps } from "@mui/material";

const FileUpload = ({ ...rest }: InputProps) => {
  return (
    <Button variant="contained" component="label" startIcon={<CloudUpload />}>
      Select File
      <Input type="file" hidden {...rest} />
    </Button>
  );
};

export default FileUpload;
