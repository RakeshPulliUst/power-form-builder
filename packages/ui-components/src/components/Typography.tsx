import React from "react";
import {
  Typography as DefaultTypography,
} from "@mui/material";

type Props = {
  children: React.ReactNode;
  component?: any;
  variant?: any;
  color?: any;
};

const Typography = ({
  children,
  component,
  variant,
  color,
  ...rest
}: Props) => {
  return (
    <DefaultTypography component={component} variant={variant} color={color}>
      {children}
    </DefaultTypography>
  );
};

export default Typography;
