import React from "react";
import { TableHead as DefaultTableHead } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

function TableHead({ children, ...rest }: Props) {
  return <DefaultTableHead>{children}</DefaultTableHead>;
}

export default TableHead;
