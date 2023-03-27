import React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SxProps, Theme } from "@mui/material";

type Props = {
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
  sx?: SxProps<Theme> | undefined;
  color?:
    | "disabled"
    | "action"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

const LockIcon = ({ onClick, sx, color }: Props) => {
  return <LockOutlinedIcon onClick={onClick} sx={sx} color={color} />;
};

export default LockIcon;
