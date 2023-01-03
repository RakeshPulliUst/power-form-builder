import React from "react";
import { Stack as DefaultStack } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";

type Props = {
  width?: string;
  direction?:
    | ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse">
    | undefined;
  spacing?: number;
  padding?: number;
  children: React.ReactNode;
};

const Stack = ({
  width,
  direction,
  spacing,
  padding,
  children,
  ...rest
}: Props) => {
  return (
    <DefaultStack
      width={width}
      spacing={spacing}
      padding={padding}
      direction={direction}
      {...rest}
    >
      {children}
    </DefaultStack>
  );
};

export default Stack;
