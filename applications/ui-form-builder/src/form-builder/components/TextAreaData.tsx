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
  TextField,
} from "@power-form-builder/ui-components";
import { TextAreaDiaglog } from "../DialogInterface";

const TextAreaData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  textAreaValues: TextAreaDiaglog;
}> = ({ open, handleClose, textAreaValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //TextField
  const [textValue, setTextValue] = useState("");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const [textMinRows, setTextMinRows] = useState("");
  const [textWidth, setTextWidth] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    console.log(textValue);
  };

  const handleTextPlaceholder = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextPlaceholder(event.target.value);
  };

  const handleTextMinRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMinRows(event.target.value);
  };

  const handleTextWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextWidth(event.target.value);
  };

  //Checkbox
  const [required, setRequired] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  const handleData = () => {
    console.log(textAreaValues);
    textAreaValues.label = textValue;
    textAreaValues.placeholder = textPlaceholder;
    textAreaValues.minRows = textMinRows;
    textAreaValues.width = textWidth;
    textAreaValues.required = required;
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
      <DialogTitle id="alert-dialog-title">{"TextArea Details"}</DialogTitle>
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
            <MuiCheckBox
              label="Required"
              checked={required}
              required={true}
              onChange={handleCheckboxChange}
            />
            <br />
            <br />

            <TextField
              label="Minimum Rows"
              required={true}
              value={textMinRows}
              placeholder="Enter Minimum Rows"
              onChange={handleTextMinRows}
            />
            <br />
            <br />
            <TextField
              label="Text Area Width"
              required={true}
              value={textWidth}
              placeholder="Enter TextArea Width"
              onChange={handleTextWidth}
            />
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <MuiButton
          label="Cancel"
          color="success"
          onClick={handleClose}
          size="medium"
        />
        <MuiButton
          label="Save"
          color="success"
          onClick={handleData}
          size="medium"
        />
      </DialogActions>
    </Dialog>
  );
};

export default TextAreaData;
