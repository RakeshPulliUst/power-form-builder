import React from "react";
import { TableBody as DefaultTableBody } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

function TableBody({ children, ...rest }: Props) {
  return <DefaultTableBody>{children}</DefaultTableBody>;
}

export default TableBody;
