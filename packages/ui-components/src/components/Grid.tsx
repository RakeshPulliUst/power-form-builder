import { Box, Grid as DefaultGrid } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  columns?: number;
  alignItems?: string;
  justifyContent?: string;
};

const Grid = ({
  children,
  spacing,
  columns,
  alignItems,
  justifyContent,
  ...rest
}: Props) => {
  return (
    <DefaultGrid
      container
      spacing={spacing ? spacing : 10}
      columns={columns ? columns : 16}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}
    >
      {children}
    </DefaultGrid>
  );
};

export default Grid;
