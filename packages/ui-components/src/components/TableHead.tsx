import React from "react";
import { TableHead as DefaultTableHead } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

function TableHead({ children, ...rest }: Props) {
  return (
    <DefaultTableHead sx={{ backgroundColor: "rgb(0,0,0,0.2)" }}>
      {children}
    </DefaultTableHead>
  );
}

export default TableHead;
