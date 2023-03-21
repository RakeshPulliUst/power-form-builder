import {
  Box,
  Grid as DefaultGrid,
  GridProps as DefaultGridProps,
} from "@mui/material";

interface GridProps extends DefaultGridProps {
  spacing?: number;
  columns?: number;
}

const Grid = ({ spacing, columns, ...rest }: GridProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DefaultGrid
        container
        spacing={spacing ? spacing : 10}
        columns={columns ? columns : 16}
        {...rest}
      />
    </Box>
  );
};

export default Grid;
