import React from "react";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { SxProps, Theme } from "@mui/material";
import Tooltip from "../Tooltip";

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

const HistoryIcon = React.forwardRef(({ onClick, sx, color }: Props, ref) => {
  return (
    <Tooltip title="Edit" placement="top">
      <HistoryOutlinedIcon onClick={onClick} sx={sx} color={color} />
    </Tooltip>
  );
});

export default HistoryIcon;
