import React from "react";
import {
  DialogTitle as DefaultDialogTitle,
  DialogTitleProps as DefaultDialogTitleProps,
} from "@mui/material";
import Box from "../Box";

interface DialogTitleProps extends DefaultDialogTitleProps {
  title: string;
  children: React.ReactNode;
}

const DialogTitle = ({ title, children, ...rest }: DialogTitleProps) => {
  return (
    <DefaultDialogTitle {...rest}>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}> {title}</Box>
        <Box>{children}</Box>
      </Box>
    </DefaultDialogTitle>
  );
};

export default DialogTitle;
