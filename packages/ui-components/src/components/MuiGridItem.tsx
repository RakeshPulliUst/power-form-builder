import { Grid } from "@mui/material";
import React from "react";

type Props = {
  xs?: number;
  md?: number;
  sm?: number;
  children: React.ReactNode;
};

const MuiGridItem = (props: Props) => {
  return (
    <Grid item xs={props.xs} md={props.md} sm={props.sm}>
      {props.children}
    </Grid>
  );
};

export default MuiGridItem;
