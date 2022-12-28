import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import {
  MuiButton,
  MuiSelect,
  MuiTextField,
} from "@power-form-builder/ui-components";
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

  const handleButtonTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectvalue = event.target.value;
    setButtonTheme(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  const handleButtonSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectvalue = event.target.value;
    setButtonSize(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  const handleData = () => {
    buttonValues.label = buttonLabel;
    buttonValues.theme = buttonTheme;
    buttonValues.size = buttonSize;
    console.log(buttonValues);
    handleOpen();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Component Details"}</DialogTitle>
      <DialogContent>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Display" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DialogContentText id="alert-dialog-description">
              <MuiTextField
                label="Label"
                required={true}
                value={buttonLabel}
                onChange={handleButtonLabel}
              />
              <br />
              <br />
              <MuiSelect
                label="Theme"
                placeholder="Type To Search"
                menuItems={ButtonThemeValues}
                multiple={false}
                values={buttonTheme}
                onChange={handleButtonTheme}
                textFieldWidth={225}
                size="medium"
                required={false}
                defaultValue={"primary"}
              />
              <br />
              <br />
              <MuiSelect
                label="Size"
                placeholder="Type To Search"
                menuItems={ButtonSizeDataValues}
                multiple={false}
                values={buttonSize}
                textFieldWidth={225}
                onChange={handleButtonSize}
                size="medium"
                defaultValue={"medium"}
                required={false}
              />
            </DialogContentText>
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <MuiButton
          label="Disagree"
          color="success"
          onClick={handleClose}
          size="medium"
        />
        <MuiButton
          label="Agree"
          color="success"
          onClick={handleData}
          size="medium"
        />
      </DialogActions>
    </Dialog>
  );
};

export default ButtonData;
