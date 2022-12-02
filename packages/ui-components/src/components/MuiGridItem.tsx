import { Grid } from "@mui/material";
import React from "react";

type Props = {
  xs: number;
  md: number;
  children: React.ReactNode;
};

const MuiGridItem = (props: Props) => {
  return (
    <Grid item xs={props.xs} md={props.md}>
      {props.children}
    </Grid>
  );
};

export default MuiGridItem;
