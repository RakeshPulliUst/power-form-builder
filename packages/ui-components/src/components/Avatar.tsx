import React from "react";
import {
  Avatar as DefaultAvatar,
  AvatarProps as DefaultAvatarProps,
} from "@mui/material";

interface AvatarProps extends DefaultAvatarProps {}

const Avatar = ({ ...rest }: AvatarProps) => {
  return <DefaultAvatar {...rest} />;
};

export default Avatar;
