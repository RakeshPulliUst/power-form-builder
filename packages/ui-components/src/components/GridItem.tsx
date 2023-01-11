import { Grid, Paper, styled } from "@mui/material";
import React from "react";

type Props = {
  xs?: number;
  md?: number;
  sm?: number;
  children: React.ReactNode;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GridItem = ({ xs, md, sm, children, ...rest }: Props) => {
  return (
    <Grid item xs={xs} md={md} sm={sm} {...rest}>
      <Item>{children}</Item>
    </Grid>
  );
};

export default GridItem;
