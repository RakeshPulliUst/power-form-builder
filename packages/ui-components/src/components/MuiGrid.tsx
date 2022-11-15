import { Grid } from "@mui/material";
import React from "react";

type Props = {
    xs: number,
    children: React.ReactNode
};

const MuiGrid = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={props.xs}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
