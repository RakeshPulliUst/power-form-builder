import { Box, Grid as DefaultGrid, SxProps, Theme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  columns?: number;
  alignItems?: string;
  justifyContent?: string;
  sx?: SxProps<Theme> | undefined;
};

const Grid = ({
  children,
  spacing,
  columns,
  alignItems,
  justifyContent,
  sx,
  ...rest
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DefaultGrid
        container
        spacing={spacing ? spacing : 10}
        columns={columns ? columns : 16}
        alignItems={alignItems}
        justifyContent={justifyContent}
        sx={sx}
        {...rest}
      >
        {children}
      </DefaultGrid>
    </Box>
  );
};

export default Grid;
