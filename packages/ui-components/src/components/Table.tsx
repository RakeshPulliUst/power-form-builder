import * as React from "react";
import FormControl from "@mui/material/FormControl";
import {
  Table as DefaultTable,
  TableProps as DefaultTableProps,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

interface TableProps extends DefaultTableProps {
  minWidth: number;
}

const Table = ({ minWidth, ...rest }: TableProps) => {
  return (
    <FormControl sx={{ m: 1 }}>
      <TableContainer component={Paper}>
        <DefaultTable sx={{ minWidth: minWidth }} {...rest} />
      </TableContainer>
    </FormControl>
  );
};

export default Table;
