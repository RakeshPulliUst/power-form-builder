import React, { useState } from "react";

import {
  Button,
  Checkbox,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TabContext,
  TabPanel,
  TabList,
} from "@power-form-builder/ui-components";
import { TextAreaDiaglog } from "../DialogInterface";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

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
  const [textMinRows, setTextMinRows] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

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
    setTextMinRows(parseInt(event.target.value));
  };

  const handleTextWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextWidth(parseInt(event.target.value));
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

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Validation", value: "2" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="TextArea Details" />
      <DialogContent>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} tabItems={tabItems}></TabList>
          </Box>
          <TabPanel value="1">
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
              label="Minimum Rows"
              required={true}
              value={textMinRows.toString()}
              placeholder="Enter Minimum Rows"
              onChange={handleTextMinRows}
            />
            <br />
            <br />
            <TextField
              label="Text Area Width"
              required={true}
              value={textWidth.toString()}
              placeholder="Enter TextArea Width"
              onChange={handleTextWidth}
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

export default TextAreaData;
