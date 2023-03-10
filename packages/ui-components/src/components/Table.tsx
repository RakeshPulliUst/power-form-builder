import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { Table as DefaultTable } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

type Props = {
  children: React.ReactNode;
  minWidth: number;
};

const Table = ({ children, minWidth, ...rest }: Props) => {
  return (
    <FormControl sx={{ m: 1 }}>
      <TableContainer component={Paper}>
        <DefaultTable sx={{ minWidth: minWidth }} aria-label="simple table">
          {children}
        </DefaultTable>
      </TableContainer>
    </FormControl>
  );
};

export default Table;
