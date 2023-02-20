import React from "react";
import { Box as DefaultBox, SxProps, Theme } from "@mui/material";

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
  component?: "form" & (React.ElementType<any> | undefined);
  onSubmit?:
    | React.FormEventHandler<HTMLFormElement | HTMLDivElement>
    | undefined;
};

const Box = ({ children, sx, component, onSubmit, ...rest }: Props) => {
  return (
    <DefaultBox sx={sx} component={component} onSubmit={onSubmit}>
      {" "}
      {children}
    </DefaultBox>
  );
};

export default Box;
