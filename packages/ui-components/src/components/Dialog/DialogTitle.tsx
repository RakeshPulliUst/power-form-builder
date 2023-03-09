import React from "react";
import { DialogTitle as DefaultDialogTitle } from "@mui/material";
import Box from "../Box";
type Props = {
  title: string;
  children?: React.ReactNode;
};

const DialogTitle = ({ title, children, ...rest }: Props) => {
  return (
    <DefaultDialogTitle>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}> {title}</Box>
        <Box>{children}</Box>
      </Box>
    </DefaultDialogTitle>
  );
};

export default DialogTitle;
