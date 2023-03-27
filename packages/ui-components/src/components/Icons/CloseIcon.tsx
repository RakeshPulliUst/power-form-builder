import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { SxProps, Theme } from "@mui/material";

type Props = {
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
  sx?: SxProps<Theme> | undefined;
};

const CloseIcon = ({ onClick, sx }: Props) => {
  return <CloseOutlinedIcon onClick={onClick} sx={sx} />;
};

export default CloseIcon;
