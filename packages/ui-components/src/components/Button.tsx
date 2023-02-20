import { Box, Button as DefaultButton } from "@mui/material";

type Props = {
  label: string;
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
};

const Button = ({ label, color, size, onClick, fullWidth, ...rest }: Props) => {
  return (
    <DefaultButton
      variant="contained"
      onClick={onClick}
      color={color}
      size={size}
      type="submit"
      aria-label={label}
      sx={{ mt: 3, mb: 2 }}
      fullWidth={fullWidth}
      {...rest}
    >
      {label}
    </DefaultButton>
  );
};

export default Button;
