import React from "react";
import {
  Typography as DefaultTypography,
  TypographyProps as DefaultTypographyProps,
} from "@mui/material";

interface TypographyProps extends DefaultTypographyProps {}

const Typography = ({ ...rest }: TypographyProps) => {
  return <DefaultTypography {...rest} />;
};

export default Typography;
