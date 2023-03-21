import React from "react";
import { Box as DefaultBox, BoxProps as DefaultBoxProps } from "@mui/material";

interface BoxProps extends DefaultBoxProps {}

const Box = ({ ...rest }: BoxProps) => {
  return <DefaultBox {...rest} />;
};

export default Box;
