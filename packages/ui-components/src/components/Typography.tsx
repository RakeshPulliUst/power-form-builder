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
};

const Typography = ({ children, component, variant, ...rest }: Props) => {
  return (
    <DefaultTypography component={component} variant={variant}>
      {children}
    </DefaultTypography>
  );
};

export default Typography;
