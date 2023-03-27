import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface IconProps {
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error";
}

export const ContentCopyOutlinedIcons = ({
  size = "medium",
  color = "inherit",
}: IconProps) => {
  return <ContentCopyOutlinedIcon fontSize={size} color={color} />;
};

export const EditOutlinedIcons = ({
  size = "medium",
  color = "inherit",
}: IconProps) => {
  return <EditOutlinedIcon fontSize={size} color={color} />;
};

export const DeleteForeverOutlinedIcons = ({
  size = "medium",
  color = "inherit",
}: IconProps) => {
  return <DeleteForeverOutlinedIcon fontSize={size} color={color} />;
};

export const PreviewOutlinedIcons = ({
  size = "medium",
  color = "inherit",
}: IconProps) => {
  return <PreviewOutlinedIcon fontSize={size} color={color} />;
};

export const CloseOutlinedIcons = ({
  size = "medium",
  color = "inherit",
}: IconProps) => {
  return <CloseOutlinedIcon fontSize={size} color={color} />;
};
