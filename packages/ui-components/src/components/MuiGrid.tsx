import { Box, Grid } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  columns?: number;
  alignItems?: string;
  justifyContent?: string;
};

const MuiGrid = (props: Props) => {
  return (
    <Grid
      container
      spacing={props.spacing ? props.spacing : 10}
      columns={props.columns ? props.columns : 16}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </Grid>
  );
};

export default MuiGrid;
