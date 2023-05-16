import {
  TableCell as DefaultTableCell,
  TableCellProps as DefaultTableCellProps,
} from "@mui/material";

interface TableCellProps extends DefaultTableCellProps {}

function TableCell({ ...rest }: TableCellProps) {
  return <DefaultTableCell sx={{ fontSize: 18 }} {...rest} />;
}

export default TableCell;
