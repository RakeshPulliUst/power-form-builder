import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from "react-bootstrap";

interface ButtonProps extends DefaultButtonProps {}

const BButton = ({ ...rest }: ButtonProps) => {
  return (
    <DefaultButton
      type="submit"
      {...rest}
      style={{ marginTop: 5, marginBottom: 2 }}
    />
  );
};

export default BButton;
