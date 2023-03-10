import Stack from "./Stack";
import { Alert as DefaultAlert } from "@mui/material";

type Props = {
  label: string;
  severity: "error" | "warning" | "info" | "success";
};

const Alert = (props: Props) => {
  return (
    <div>
      <Stack width={"100%"} spacing={2}>
        <DefaultAlert severity={props.severity}>{props.label}</DefaultAlert>
      </Stack>
    </div>
  );
};

export default Alert;
