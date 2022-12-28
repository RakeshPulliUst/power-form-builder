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
import { TextFieldDiaglog } from "../DialogInterface";

const TextFieldData: React.FC<{
  open: boolean;
  handleClose: () => void;
  textFieldValues: TextFieldDiaglog;
  handleOpen: () => void;
  textFieldStatus: boolean;
}> = ({ open, handleClose, textFieldValues, handleOpen, textFieldStatus }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //TextField
  const [textValue, setTextValue] = useState("");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const [textMinLength, setTextMinLength] = useState("");
  const [textMaxLength, setTextMaxLength] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    console.log(textValue);
  };

  const handleTextPlaceholder = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextPlaceholder(event.target.value);
  };

  const handleTextMinLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMinLength(event.target.value);
  };

  const handleTextMaxLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMaxLength(event.target.value);
  };

  //Checkbox
  const [required, setRequired] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  const handleData = () => {
    console.log(open);
    textFieldValues.label = textValue;
    textFieldValues.placeholder = textPlaceholder;
    textFieldValues.maxLength = textMaxLength;
    textFieldValues.minLength = textMinLength;
    textFieldValues.required = required;
    console.log(textFieldValues);
    textFieldStatus = true;
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
                value={textValue}
                onChange={handleTextChange}
              />
              <br />
              <br />
              <MuiTextField
                label="Placeholder"
                required={true}
                placeholder={textPlaceholder}
                value={textPlaceholder}
                onChange={handleTextPlaceholder}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <MuiCheckBox
              label="Required"
              checked={required}
              required={true}
              defaultChecked={false}
              onChange={handleCheckboxChange}
            />
            <br />

            <MuiTextField
              label="Minimum Length"
              required={true}
              value={textMinLength}
              placeholder="Enter Minimum Length"
              onChange={handleTextMinLength}
            />
            <br />
            <br />
            <MuiTextField
              label="Maximum Length"
              required={true}
              placeholder="Enter Maximum Length"
              value={textMaxLength}
              onChange={handleTextMaxLength}
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

export default TextFieldData;
