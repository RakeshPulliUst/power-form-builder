import React from "react";
import { Box as DefaultBox } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Box = ({ children, ...rest }: Props) => {
  return (
    <DefaultBox sx={{ borderBottom: 1, borderColor: "divider", p: 3 }}>
      {children}
    </DefaultBox>
  );
};

export default Box;
