import React from "react";
import {
  Typography as DefaultTypography,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

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
