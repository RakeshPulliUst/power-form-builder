import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Button, Select, TextField } from "@power-form-builder/ui-components";
import { ButtonDialog } from "../DialogInterface";

const ButtonData: React.FC<{
  open: boolean;
  handleClose: () => void;
  buttonValues: ButtonDialog;
  handleOpen: () => void;
}> = ({ open, handleClose, buttonValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const ButtonThemeValues = [
    { selectDataLabel: "primary", selectDataValue: "primary" },
    { selectDataLabel: "secondary", selectDataValue: "secondary" },
    { selectDataLabel: "info", selectDataValue: "info" },
    { selectDataLabel: "success", selectDataValue: "success" },
    { selectDataLabel: "error", selectDataValue: "error" },
    { selectDataLabel: "inherit", selectDataValue: "inherit" },
    { selectDataLabel: "warning", selectDataValue: "warning" },
  ];

  const ButtonSizeDataValues = [
    { selectDataLabel: "small", selectDataValue: "small" },
    { selectDataLabel: "medium", selectDataValue: "medium" },
    { selectDataLabel: "large", selectDataValue: "large" },
  ];

  //TextField
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttonTheme, setButtonTheme] = useState<string[]>([]);
  const [buttonSize, setButtonSize] = useState<string[]>([]);

  const handleButtonLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonLabel(event.target.value);
    console.log(buttonLabel);
  };

  const handleButtonTheme = (event: any) => {
    // const {
    //   target: { value },
    // } = event;
    // setButtonTheme(typeof value === "string" ? value.split(",") : value);

    const selectvalue = event.target.value;
    console.log(selectvalue);
    setButtonTheme(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log(buttonTheme);
  };

  const handleButtonSize = (event: any) => {
    const selectvalue = event.target.value;
    console.log(selectvalue);
    setButtonSize(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log(buttonSize);
  };

  const handleData = () => {
    buttonValues.label = buttonLabel;
    buttonValues.theme = buttonTheme.toString();
    buttonValues.size = buttonSize.toString();
    console.log(buttonValues);
    handleOpen();
  };
  return (
    <Dialog
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
      <DialogContent>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Display" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ textAlign: "center" }}>
            <DialogContentText id="alert-dialog-description">
              <TextField
                label="Label"
                required={true}
                value={buttonLabel}
                onChange={handleButtonLabel}
              />
              <br />
              <br />
              <Select
                label="Theme"
                placeholder="Type To Search"
                menuItems={ButtonThemeValues}
                multiple={false}
                value={buttonTheme}
                onChange={handleButtonTheme}
                width={225}
                size="medium"
                required={false}
              />
              <br />
              <Select
                label="Size"
                placeholder="Type To Search"
                menuItems={ButtonSizeDataValues}
                multiple={false}
                value={buttonSize}
                onChange={handleButtonSize}
                width={225}
                size="medium"
                required={false}
              />
            </DialogContentText>
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button
          label="Cancel"
          color="success"
          onClick={handleClose}
          size="medium"
        />
        <Button
          label="Save"
          color="success"
          onClick={handleData}
          size="medium"
        />
      </DialogActions>
    </Dialog>
  );
};

export default ButtonData;
