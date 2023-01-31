import React from "react";
import { DialogTitle as DefaultDialogTitle } from "@mui/material";
type Props = {
  title: string;
};

const DialogTitle = ({ title, ...rest }: Props) => {
  return <DefaultDialogTitle>{title}</DefaultDialogTitle>;
};

export default DialogTitle;
