import React from "react";
import { Box as DefaultBox, SxProps, Theme } from "@mui/material";

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
  component?: "form" & (React.ElementType<any> | undefined);
  onSubmit?:
    | React.FormEventHandler<HTMLFormElement | HTMLDivElement>
    | undefined;
  flexGrow?: number;
  display?: string;
  alignItems?: string;
};

const Box = ({
  children,
  sx,
  component,
  onSubmit,
  flexGrow,
  display,
  alignItems,
  ...rest
}: Props) => {
  return (
    <DefaultBox
      sx={sx}
      component={component}
      onSubmit={onSubmit}
      flexGrow={flexGrow}
      display={display}
      alignItems={alignItems}
    >
      {" "}
      {children}
    </DefaultBox>
  );
};

export default Box;
