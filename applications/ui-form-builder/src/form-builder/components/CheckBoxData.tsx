import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Button, Checkbox, TextField } from "@power-form-builder/ui-components";
import { CheckboxDiaglog } from "../DialogInterface";
import { Element } from "../ElementInterface";

const CheckboxData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  checkBoxValues: CheckboxDiaglog;
  element: Element;
}> = ({ open, handleClose, checkBoxValues, handleOpen, element }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //Checkbox
  const [checkboxLabel, setCheckboxLabel] = useState("");
  const [defaultValue, setDefaultValue] = useState(false);
  const [errorLabel, setErrorLabel] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxLabel(event.target.value);
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
    console.log(checkboxLabel);
    checkBoxValues.label = checkboxLabel;
    checkBoxValues.default = defaultValue;
    checkBoxValues.error = errorLabel;
    checkBoxValues.required = required;
    console.log(checkBoxValues);
    handleOpen();
  };

  useEffect(() => {
    console.log("Checkobx", element);
    setCheckboxLabel(element.label!);
    setDefaultValue(element.default!);
    setRequired(element.required!);
    setErrorLabel(element.error!);
    console.log("Checkobx", checkboxLabel, defaultValue, errorLabel);
  }, []);

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
      <DialogTitle id="alert-dialog-title">{"Checkbox Details"}</DialogTitle>
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
              <TextField
                label="Label"
                required={true}
                value={checkboxLabel}
                onChange={handleTextChange}
              />
              <br />
              <br />
              <Checkbox
                label="Default Value"
                required={true}
                checked={defaultValue}
                onChange={handleDefaultValue}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <Checkbox
              label="Required"
              checked={required}
              defaultChecked={defaultValue}
              required={true}
              onChange={handleCheckboxChange}
            />
            <br />
            <br />
            <TextField
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

export default CheckboxData;
