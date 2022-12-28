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
  MuiCheckBox,
  MuiTextField,
} from "@power-form-builder/ui-components";
import { CheckBoxDiaglog } from "../DialogInterface";

const CheckBoxData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  checkBoxValues: CheckBoxDiaglog;
}> = ({ open, handleClose, checkBoxValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //CheckBox
  const [checkboxLabel, setTextValue] = useState("");
  const [defaultValue, setDefaultValue] = useState(false);
  const [errorLabel, setErrorLabel] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    console.log(checkboxLabel);
  };

  const handleDefaultValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(event.target.checked);
  };

  const handleErrorLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorLabel(event.target.value);
  };

  //Checkbox
  const [required, setRequired] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  const handleData = () => {
    checkBoxValues.label = checkboxLabel;
    checkBoxValues.default = defaultValue;
    checkBoxValues.error = errorLabel;
    checkBoxValues.required = required;
    console.log(checkBoxValues);
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
              <Tab label="Validation" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DialogContentText id="alert-dialog-description">
              <MuiTextField
                label="Label"
                required={true}
                value={checkboxLabel}
                onChange={handleTextChange}
              />
              <br />
              <br />
              <MuiCheckBox
                label="Default Value"
                required={true}
                checked={defaultValue}
                defaultChecked={defaultValue}
                onChange={handleDefaultValue}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <MuiCheckBox
              label="Required"
              checked={required}
              defaultChecked={defaultValue}
              required={true}
              onChange={handleCheckboxChange}
            />
            <br />
            <MuiTextField
              label="Error Label"
              required={true}
              placeholder="Enter Error Label"
              value={errorLabel}
              onChange={handleErrorLabel}
            />
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

export default CheckBoxData;
