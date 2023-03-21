import {
  TableRow as DefaultTableRow,
  TableRowProps as DefaultTableRowProps,
} from "@mui/material";

interface TableRowProps extends DefaultTableRowProps {}

function TableRow({ ...rest }: TableRowProps) {
  return <DefaultTableRow {...rest} />;
}

export default TableRow;
