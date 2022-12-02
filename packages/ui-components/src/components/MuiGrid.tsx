import { Box, Grid } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MuiGrid = (props: Props) => {
  return (
    <Grid container spacing={10} columns={16}>
      {props.children}
    </Grid>
  );
};

export default MuiGrid;
