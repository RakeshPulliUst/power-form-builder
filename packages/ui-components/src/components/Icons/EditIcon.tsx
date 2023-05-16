import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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

const EditIcon = React.forwardRef(({ onClick, sx, color }: Props, ref) => {
  return (
    <Tooltip title="Edit" placement="top">
      <EditOutlinedIcon onClick={onClick} sx={sx} color={color} />
    </Tooltip>
  );
});

export default EditIcon;
