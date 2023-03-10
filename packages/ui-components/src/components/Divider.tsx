import React from "react";
import { Divider as DefaultDivider } from "@mui/material/";

type Props = {
  variant?: "fullWidth" | "inset" | "middle" | undefined;
};

const Divider = ({ variant, ...rest }: Props) => {
  return <DefaultDivider variant={variant} />;
};

export default Divider;
