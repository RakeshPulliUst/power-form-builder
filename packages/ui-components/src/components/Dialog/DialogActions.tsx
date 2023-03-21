import React from "react";
import {
  DialogActions as DefaultDialogActions,
  DialogActionsProps as DefaultDialogActionsProps,
} from "@mui/material";

interface DialogActionsProps extends DefaultDialogActionsProps {}

const DialogActions = ({ ...rest }: DialogActionsProps) => {
  return <DefaultDialogActions sx={{ paddingRight: "20px" }} {...rest} />;
};

export default DialogActions;
