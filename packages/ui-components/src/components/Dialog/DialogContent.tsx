import React from "react";
import {
  DialogContent as DefaultDialogContent,
  DialogContentProps as DefaultDialogContentProps,
} from "@mui/material";

interface DialogContentProps extends DefaultDialogContentProps {}

const DialogContent = ({ ...rest }: DialogContentProps) => {
  return <DefaultDialogContent {...rest}></DefaultDialogContent>;
};

export default DialogContent;
