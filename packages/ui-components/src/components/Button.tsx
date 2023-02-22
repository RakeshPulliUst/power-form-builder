import { Box, Button as DefaultButton } from "@mui/material";

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
};

const Button = ({
  label,
  color,
  size,
  onClick,
  fullWidth,
  disabled,
  ...rest
}: Props) => {
  return (
    <DefaultButton
      variant="contained"
      onClick={onClick}
      color={color}
      size={size}
      type="submit"
      sx={{ mt: 3, mb: 2 }}
      fullWidth={fullWidth}
      disabled={disabled}
      {...rest}
    >
      {label}
    </DefaultButton>
  );
};

export default Button;
