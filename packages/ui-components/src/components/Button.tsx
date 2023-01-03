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
};

const Button = ({ label, color, size, onClick, ...rest }: Props) => {
  return (
    <DefaultButton
      variant="contained"
      onClick={onClick}
      color={color}
      size={size}
      type="submit"
      aria-label={label}
      {...rest}
    >
      {label}
    </DefaultButton>
  );
};

export default Button;
