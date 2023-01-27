import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Table as DefaultTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  minWidth: number;
};

const Table = ({ children, minWidth, ...rest }: Props) => {
  // const [selectItems, setTableItems] = React.useState<string[]>(value);
  // const handleChange = (event: TableChangeEvent<typeof selectItems>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setTableItems(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <FormControl sx={{ m: 1 }}>
      {/* <TableContainer component={Paper}>
        <DefaultTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.map((name, index) => (
                <TableCell align="right">{name.tableHeading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.tableHeading}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.tableValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </DefaultTable>
      </TableContainer> */}
      <TableContainer component={Paper}>
        <DefaultTable sx={{ minWidth: minWidth }} aria-label="simple table">
          {children}
        </DefaultTable>
      </TableContainer>
    </FormControl>
  );
};

export default Table;
