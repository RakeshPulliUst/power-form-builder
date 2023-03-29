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
  TabContext,
  TabPanel,
  TabList,
  Divider,
  CloseIcon,
} from "@power-form-builder/ui-components";
import { CheckboxDiaglog } from "../DialogInterface";
import { Element } from "../ElementInterface";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

const CheckboxData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  checkBoxValues: CheckboxDiaglog;
  element: Element;
}> = ({ open, handleClose, checkBoxValues, handleOpen, element }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    console.log(value);
  };

  //Checkbox
  const [checkboxLabel, setCheckboxLabel] = useState("");
  const [defaultValue, setDefaultValue] = useState(false);
  const [errorLabel, setErrorLabel] = useState("");

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    setCheckboxLabel(element.label!);
    setDefaultValue(element.default!);
    setRequired(element.required!);
    setErrorLabel(element.error!);
  }, [element.label, element.default, element.error, element.required]);

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Validation", value: "2" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="Checkbox Details">
        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }}></CloseIcon>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} tabItems={tabItems}></TabList>
          </Box>
          <TabPanel value="1">
            <TextField
              label="Label"
              required={true}
              value={checkboxLabel}
              onChange={handleTextChange}
              variant={"outlined"}
              sx={{ m: 1 }}
            />
            <br />
            <br />
            <Checkbox
              label="Default Value"
              required={true}
              checked={defaultValue}
              onChange={handleDefaultValue}
            />
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
              variant={"outlined"}
            />
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose} size="medium">
          Cancel
        </Button>
        <Button color="success" onClick={handleData} size="medium">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckboxData;
