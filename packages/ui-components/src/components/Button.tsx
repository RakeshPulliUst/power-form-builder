import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from "@mui/material";

interface ButtonProps extends DefaultButtonProps {}

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <DefaultButton
      variant="contained"
      sx={{ mt: 5, mb: 2 }}
      type="submit"
      {...rest}
    />
  );
};

export default Button;
