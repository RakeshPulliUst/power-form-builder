import React from "react";
import { Link as DefaultLink } from "@mui/material";

type Props = {
  children: React.ReactNode;
  href?: string | undefined;
  variant?: any;
};

const Link = ({ children, href, variant, ...rest }: Props) => {
  return (
    <DefaultLink href={href} variant={variant}>
      {children}
    </DefaultLink>
  );
};

export default Link;
