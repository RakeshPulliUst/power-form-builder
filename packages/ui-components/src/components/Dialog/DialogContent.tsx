import React from "react";
import { DialogContent as DefaultDialogContent } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const DialogContent = ({ children, ...rest }: Props) => {
  return <DefaultDialogContent>{children}</DefaultDialogContent>;
};

export default DialogContent;
