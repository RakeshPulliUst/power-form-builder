import React from "react";
import {
  Link as DefaultLink,
  LinkProps as DefaultLinkProps,
} from "@mui/material";

interface LinkProps extends DefaultLinkProps {}

const Link = ({ ...rest }: LinkProps) => {
  return <DefaultLink {...rest} />;
};
export default Link;
