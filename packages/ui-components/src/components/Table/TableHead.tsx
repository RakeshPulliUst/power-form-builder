import React from "react";
import {
  TableHead as DefaultTableHead,
  TableHeadProps as DefaultTableHeadProps,
} from "@mui/material";

interface TableHeadProps extends DefaultTableHeadProps {}

function TableHead({ ...rest }: TableHeadProps) {
  return (
    <DefaultTableHead sx={{ backgroundColor: "rgb(0,0,0,0.2)" }} {...rest} />
  );
}

export default TableHead;
