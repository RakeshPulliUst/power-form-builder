import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
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

const DeleteForeverIcon = ({ onClick, sx, color }: Props) => {
  return (
    <Tooltip title="Delete" placement="top">
      <DeleteForeverOutlinedIcon onClick={onClick} sx={sx} color={color} />
    </Tooltip>
  );
};

export default DeleteForeverIcon;
