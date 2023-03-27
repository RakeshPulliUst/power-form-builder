import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { SxProps, Theme } from "@mui/material";

type Props = {
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  sx?: SxProps<Theme> | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

const CircularProgressIcon = ({ onClick, sx, color }: Props) => {
  return <CircularProgress onClick={onClick} sx={sx} color={color} />;
};

export default CircularProgressIcon;
