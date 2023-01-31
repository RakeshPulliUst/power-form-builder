import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  TabContext,
  TabPanel,
  TabList,
} from "@power-form-builder/ui-components";
import { TextFieldDiaglog } from "../DialogInterface";
import { Element } from "../ElementInterface";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

const TextFieldData: React.FC<{
  open: boolean;
  handleClose: () => void;
  textFieldValues: TextFieldDiaglog;
  handleOpen: () => void;
  element: Element;
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
    console.log(newValue);
    setValue(newValue);
    console.log(value);
  };

  //TextField
  const [textValue, setTextValue] = useState("aa");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const [textMinLength, setTextMinLength] = useState(0);
  const [textMaxLength, setTextMaxLength] = useState(0);
  const [rows, setRows] = useState(0);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTextValue(event.target.value);
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

  const handlerows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(event.target.value));
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
    textFieldValues.rows = rows;
    console.log(textFieldValues);
    textFieldStatus = true;
    console.log(textFieldStatus);
    handleOpen();
  };

  useEffect(() => {
    setTextValue(element.label!);
    setTextPlaceholder(element.placeholder!);
    setTextMaxLength(element.maxLength!);
    setTextMinLength(element.minLength!);
    setRequired(element.required!);
    setRows(element.rows!);
  }, []);

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Validation", value: "2" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        title={
          element.element === "TextField"
            ? "TextField Details"
            : element.element === "Password"
            ? "Password Details"
            : element.element === "TextArea"
            ? "TextArea Details"
            : "Email Details"
        }
      />
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
            <br />
            {element.element === "TextArea" ? (
              <>
                <br />
                <TextField
                  label="Rows"
                  required={true}
                  placeholder="Enter Rows"
                  value={rows.toString()}
                  onChange={handlerows}
                />
              </>
            ) : (
              <></>
            )}
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
