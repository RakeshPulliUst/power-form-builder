import React from "react";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
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

const AssignmentIndIcon = ({ onClick, sx, color }: Props) => {
  return <AssignmentIndOutlinedIcon onClick={onClick} sx={sx} color={color} />;
};

export default AssignmentIndIcon;
