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
  Button,
  Checkbox,
  Select,
  TextField,
} from "@power-form-builder/ui-components";
import { RadioButtonDialog } from "../DialogInterface";

import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type Props = {
  id: string;
  radioButtonDataLabel: string;
  radioButtonDataValue: string;
}[];

const RadioButtonData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  radiobuttonValues: RadioButtonDialog;
}> = ({ open, handleClose, radiobuttonValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //RadioButton
  const [radioLabel, setRadioLabel] = useState("");
  const [radioOptionLabelPosition, setRadioOptionLabelPosition] = useState<
    string[]
  >([]);
  const [radioItems, setRadioItems] = useState<Props>([
    { id: uuidv4(), radioButtonDataLabel: "", radioButtonDataValue: "" },
  ]);

  const RadioOptionPositionValues = [
    { id: "1", selectDataLabel: "start", selectDataValue: "start" },
    { id: "2", selectDataLabel: "end", selectDataValue: "end" },
    { id: "3", selectDataLabel: "top", selectDataValue: "top" },
    { id: "4", selectDataLabel: "bottom", selectDataValue: "bottom" },
  ];

  const handleRadioLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioLabel(event.target.value);
    console.log(radioLabel);
  };

  const handleRadioOptionLabelPosition = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectvalue = event.target.value;
    setRadioOptionLabelPosition(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  //Checkbox
  const [required, setRequired] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  const handleData = () => {
    console.log(radioItems);
    console.log(radiobuttonValues);
    radiobuttonValues.label = radioLabel;
    radiobuttonValues.options = radioOptionLabelPosition;
    radiobuttonValues.required = required;
    radiobuttonValues.radioItems = radioItems;
    handleOpen();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("InputFields", radioItems);
  };

  const handleChangeInput = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = radioItems.map((i) => {
      if (id === i.id) {
        console.log("aaa", event.target.name, "bb", event.target.value);
        {
          event.target.name === "radioButtonDataLabel"
            ? (i["radioButtonDataLabel"] = event.target.value)
            : (i["radioButtonDataValue"] = event.target.value);
        }
      }
      return i;
    });

    setRadioItems(newInputFields);
  };

  const handleAddFields = () => {
    setRadioItems([
      ...radioItems,
      { id: uuidv4(), radioButtonDataLabel: "", radioButtonDataValue: "" },
    ]);
    console.log(radioItems);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...radioItems];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setRadioItems(values);
  };

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
      <DialogTitle id="alert-dialog-title">{"RadioButton Details"}</DialogTitle>
      <DialogContent>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Display" value="1" />
              <Tab label="Data" value="2" />
              <Tab label="Validation" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DialogContentText id="alert-dialog-description">
              <TextField
                label="Label"
                required={true}
                value={radioLabel}
                onChange={handleRadioLabelChange}
              />
              <br />
              <br />
              <Select
                label="Options Label Position"
                placeholder=""
                menuItems={RadioOptionPositionValues}
                values={radioOptionLabelPosition}
                size="medium"
                onChange={handleRadioOptionLabelPosition}
                required={false}
                multiple={false}
                textFieldWidth={225}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <DialogContentText id="alert-dialog-description">
              <form onSubmit={handleSubmit}>
                {radioItems.map((item) => (
                  <div>
                    <br />
                    <TextField
                      label="RadioButtonDataLabel"
                      name="radioButtonDataLabel"
                      required={true}
                      placeholder=""
                      value={item.radioButtonDataLabel}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => handleChangeInput(item.id, e)}
                    />
                    &nbsp;
                    <TextField
                      label="RadioButtonValue"
                      required={true}
                      placeholder=""
                      name="radioButtonDataValue"
                      value={item.radioButtonDataValue}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => handleChangeInput(item.id, e)}
                    />
                    {radioItems.length !== 1 ? (
                      <span
                        className="icon"
                        onClick={() => handleRemoveFields(item.id)}
                      >
                        <RemoveCircleIcon />
                      </span>
                    ) : (
                      <></>
                    )}
                    <span className="icon" onClick={handleAddFields}>
                      <AddCircleIcon />
                    </span>
                  </div>
                ))}
                <br />
                <Button label="Done" color="secondary" size="small" />
              </form>
            </DialogContentText>
          </TabPanel>
          <TabPanel value="3">
            <Checkbox
              label="Required"
              checked={required}
              required={true}
              onChange={handleCheckboxChange}
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

export default RadioButtonData;
