import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Button, Checkbox, TextField } from "@power-form-builder/ui-components";
import { TextFieldDiaglog } from "../DialogInterface";

const TextFieldData: React.FC<{
  open: boolean;
  handleClose: () => void;
  textFieldValues: TextFieldDiaglog;
  handleOpen: () => void;
  element: string;
  textFieldStatus: boolean;
}> = ({
  open,
  handleClose,
  textFieldValues,
  handleOpen,
  element,
  textFieldStatus,
}) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //TextField
  const [textValue, setTextValue] = useState("");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const [textMinLength, setTextMinLength] = useState(0);
  const [textMaxLength, setTextMaxLength] = useState(0);

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
    setTextMinLength(parseInt(event.target.value));
  };

  const handleTextMaxLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMaxLength(parseInt(event.target.value));
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
    console.log(textFieldStatus);
    handleOpen();
  };
  return (
    <Dialog
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
      <DialogTitle id="alert-dialog-title">
        {element === "TextField"
          ? "TextField Details"
          : element === "Password"
          ? "Password Detais"
          : "Email Details"}
      </DialogTitle>
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
                value={textValue}
                onChange={handleTextChange}
              />
              <br />
              <br />
              <TextField
                label="Placeholder"
                required={true}
                placeholder={textPlaceholder}
                value={textPlaceholder}
                onChange={handleTextPlaceholder}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <Checkbox
              label="Required"
              checked={required}
              required={true}
              onChange={handleCheckboxChange}
            />
            <br />
            <br />
            <TextField
              label="Minimum Length"
              required={true}
              value={textMinLength.toString()}
              placeholder="Enter Minimum Length"
              onChange={handleTextMinLength}
            />
            <br />
            <br />
            <TextField
              label="Maximum Length"
              required={true}
              placeholder="Enter Maximum Length"
              value={textMaxLength.toString()}
              onChange={handleTextMaxLength}
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

export default TextFieldData;
