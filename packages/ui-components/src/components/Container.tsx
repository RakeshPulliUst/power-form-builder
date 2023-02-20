import React from "react";
import { Breakpoint, Container as DefaultContainer } from "@mui/material";

type Props = {
  children: React.ReactNode;
  component?: any;
  maxWidth?: false | Breakpoint | undefined;
};

const Container = ({ children, component, maxWidth, ...rest }: Props) => {
  return (
    <DefaultContainer component={component} maxWidth={maxWidth}>
      {children}
    </DefaultContainer>
  );
};

export default Container;
