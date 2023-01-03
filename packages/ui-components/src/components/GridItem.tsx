import { Grid } from "@mui/material";
import React from "react";

type Props = {
  xs?: number;
  md?: number;
  sm?: number;
  children: React.ReactNode;
};

const GridItem = ({ xs, md, sm, children, ...rest }: Props) => {
  return (
    <Grid item xs={xs} md={md} sm={sm} {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem;
