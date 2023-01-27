import React from "react";
import { TableCell as DefaultTableCell } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

function TableCell({ children, ...rest }: Props) {
  return <DefaultTableCell sx={{ fontSize: 18 }}>{children}</DefaultTableCell>;
}

export default TableCell;
