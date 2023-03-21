import React from "react";
import {
  Divider as DefaultDivider,
  DividerProps as DefaultDividerProps,
} from "@mui/material/";

interface DividerProps extends DefaultDividerProps {}

const Divider = ({ ...rest }: DividerProps) => {
  return <DefaultDivider {...rest} />;
};

export default Divider;
