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
  Tabs,
  TabPanel,
  Divider,
  CloseIcon,
} from "@power-form-builder/ui-components";
import { CheckboxDiaglog } from "../DialogInterface";
import { Element } from "../ElementInterface";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type ValidateProps = {
  error?: string;
  required: boolean;
};

const CheckboxData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  checkBoxValues: CheckboxDiaglog;
  element: Element;
}> = ({ open, handleClose, checkBoxValues, handleOpen, element }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //Checkbox
  const [checkboxLabel, setCheckboxLabel] = useState("");
  const [defaultValue, setDefaultValue] = useState(false);
  const [validate, setValidate] = useState<ValidateProps>({
    error: "",
    required: false,
  });

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
    setValidate({ ...validate, error: event.target.value });
  };

  //Checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ ...validate, required: event.target.checked });
  };

  const handleData = () => {
    console.log(checkboxLabel);
    checkBoxValues.label = checkboxLabel;
    checkBoxValues.default = defaultValue;
    checkBoxValues.validate = validate;
    console.log(checkBoxValues);
    handleOpen();
  };

  useEffect(() => {
    setCheckboxLabel(element.label!);
    setDefaultValue(element.default!);
    setValidate(element.validate!);
  }, [element.label, element.default, element.validate]);

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
        <Box>
          <Tabs
            onChange={handleChange}
            value={value}
            tabItems={tabItems}
          ></Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TextField
            label="Label"
            required={true}
            value={checkboxLabel}
            onChange={handleTextChange}
            variant={"outlined"}
            sx={{ marginLeft: 1, marginTop: 1 }}
          />
          <br />
          <br />
          <Checkbox
            label="Default Value"
            required={true}
            checked={defaultValue}
            onChange={handleDefaultValue}
            sx={{ marginLeft: 1 }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Checkbox
            label="Required"
            checked={validate.required}
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
            value={validate.error}
            onChange={handleErrorLabel}
            variant={"outlined"}
          />
        </TabPanel>
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
