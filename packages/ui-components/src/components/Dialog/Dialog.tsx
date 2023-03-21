import {
  Dialog as DefaultDialog,
  DialogProps as DefaultDialogProps,
} from "@mui/material/";

interface DialogProps extends DefaultDialogProps {
  style?: React.CSSProperties | undefined;
}

const Dialog = ({ style, ...rest }: DialogProps) => {
  return (
    <DefaultDialog
      fullWidth={true}
      maxWidth={"sm"}
      PaperProps={{
        style: style || {
          minHeight: "60%",
          maxHeight: "60%",
          minWidth: "42%",
          maxWidth: "42%",
        },
      }}
      {...rest}
    ></DefaultDialog>
  );
};

export default Dialog;
