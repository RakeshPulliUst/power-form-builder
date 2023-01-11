import React, { useState } from "react";
import { Dialog as DefaultDialog } from "@mui/material/";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Button from "./Button";
import Tabs from "./Tabs";

type Props = {
  open: boolean;
  handleClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  handleData: React.MouseEventHandler<HTMLButtonElement> | undefined;
  value: string;
  handleChange:
    | ((event: React.ChangeEvent<{}>, value: any) => void)
    | undefined;
  children?: React.ReactNode;
  handleButtonClose: React.MouseEventHandler<HTMLButtonElement>;
  tabItems: {
    id: string;
    tabsDataLabel: string;
    tabsDataValue: string;
  }[];
};

const Dialog = ({
  open,
  handleClose,
  value,
  handleChange,
  children,
  handleData,
  handleButtonClose,
  tabItems,
  ...rest
}: Props) => {
  return (
    <DefaultDialog
      fullWidth={true}
      maxWidth={"sm"}
      PaperProps={{
        style: {
          minHeight: "60%",
          maxHeight: "60%",
          minWidth: "45%",
          maxWidth: "45%",
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Button Details"}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          label="Cancel"
          color="success"
          onClick={handleButtonClose}
          size="medium"
        />
        <Button
          label="Save"
          color="success"
          onClick={handleData}
          size="medium"
        />
      </DialogActions>
    </DefaultDialog>
  );
};

export default Dialog;
