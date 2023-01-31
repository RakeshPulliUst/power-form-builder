import React from "react";
import { DialogActions as DefaultDialogActions } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const DialogActions = ({ children, ...rest }: Props) => {
  return <DefaultDialogActions>{children}</DefaultDialogActions>;
};

export default DialogActions;
