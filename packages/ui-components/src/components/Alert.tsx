import Stack from "./Stack";
import {
  Alert as DefaultAlert,
  AlertProps as DefaultAlertProps,
} from "@mui/material";

interface AlertProps extends DefaultAlertProps {}

const Alert = ({ ...rest }: AlertProps) => {
  return (
    <div>
      <Stack width={"100%"} spacing={2}>
        <DefaultAlert {...rest} />
      </Stack>
    </div>
  );
};

export default Alert;
