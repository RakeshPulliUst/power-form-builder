import React from "react";
import { TableRow as DefaultTableRow } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

function TableRow({ children, ...rest }: Props) {
  return <DefaultTableRow>{children}</DefaultTableRow>;
}

export default TableRow;
