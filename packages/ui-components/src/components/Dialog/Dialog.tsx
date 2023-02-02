import React from "react";
import { Dialog as DefaultDialog } from "@mui/material/";

type Props = {
  open: boolean;
  children?: React.ReactNode;
  onClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  style?: React.CSSProperties;
};

const Dialog = ({ open, style, onClose, children, ...rest }: Props) => {
  return (
    <DefaultDialog
      fullWidth={true}
      maxWidth={"sm"}
      PaperProps={{
        style: style || {
          minHeight: "60%",
          maxHeight: "60%",
          minWidth: "45%",
          maxWidth: "45%",
        },
      }}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </DefaultDialog>
  );
};

export default Dialog;
