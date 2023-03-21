import {
  TableBody as DefaultTableBody,
  TableBodyProps as DefaultTableBodyProps,
} from "@mui/material";

interface TableBodyProps extends DefaultTableBodyProps {}

function TableBody({ ...rest }: TableBodyProps) {
  return <DefaultTableBody {...rest} />;
}

export default TableBody;
