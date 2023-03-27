import React from "react";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { SxProps, Theme } from "@mui/material";
import { Tooltip } from "../..";

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

const PreviewIcon = ({ onClick, sx, color }: Props) => {
  return (
    <Tooltip title="Preview" placement="top">
      <PreviewOutlinedIcon onClick={onClick} sx={sx} color={color} />
    </Tooltip>
  );
};

export default PreviewIcon;
