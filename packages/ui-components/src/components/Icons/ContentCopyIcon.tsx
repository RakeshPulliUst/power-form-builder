import React from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
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

const ContentCopyIcon = ({ onClick, sx, color }: Props) => {
  return (
    <Tooltip title="Copy Json" placement="top">
      <ContentCopyOutlinedIcon onClick={onClick} sx={sx} color={color} />
    </Tooltip>
  );
};

export default ContentCopyIcon;
