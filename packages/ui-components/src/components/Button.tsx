import { Box, Button as DefaultButton, SxProps, Theme } from "@mui/material";

type Props = {
  label: React.ReactNode;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size: "small" | "medium" | "large" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
  label,
  color,
  size,
  onClick,
  fullWidth,
  disabled,
  sx,
  type,
  ...rest
}: Props) => {
  return (
    <DefaultButton
      variant="contained"
      onClick={onClick}
      color={color}
      size={size}
      type={type ? type : "submit"}
      sx={sx ? sx : { mt: 5, mb: 2 }}
      fullWidth={fullWidth}
      disabled={disabled}
      {...rest}
    >
      {label}
    </DefaultButton>
  );
};

export default Button;
