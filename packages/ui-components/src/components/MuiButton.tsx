import { Box, Button } from "@mui/material";

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

const MuiButton = (props: Props) => {
  return (
    <Button
      variant="contained"
      onClick={props.onClick}
      color={props.color}
      size={props.size}
    >
      {props.label}
    </Button>
  );
};

export default MuiButton;
