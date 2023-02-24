import { Paper as DefaultPaper } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  elevation?: number;
};

const Paper = ({ children, elevation, style, ...rest }: Props) => {
  return (
    <DefaultPaper elevation={elevation} style={style} {...rest}>
      {children}
    </DefaultPaper>
  );
};

export default Paper;
