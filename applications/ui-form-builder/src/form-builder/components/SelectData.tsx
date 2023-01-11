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
import { SelectDiaglog } from "../DialogInterface";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type Props = {
  id: string;
  selectDataLabel: string;
  selectDataValue: string;
}[];

const SelectData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  selectValues: SelectDiaglog;
}> = ({ open, handleClose, selectValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //Select
  const [selectLabel, setSelectLabel] = useState("");
  const [selectWidth, setSelectWidth] = useState("");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const [multipleValues, setMultipleValues] = useState(false);
  const [menuItemsData, setMenuItemsData] = useState<Props>([
    { id: uuidv4(), selectDataLabel: "", selectDataValue: "" },
  ]);

  const handleSelectLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectLabel(event.target.value);
    console.log(selectLabel);
  };

  const handleSelectWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectWidth(event.target.value);
    console.log(selectWidth);
  };

  const handleTextPlaceholder = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextPlaceholder(event.target.value);
  };

  const handleMultipleValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleValues(event.target.checked);
  };

  //Checkbox
  const [required, setRequired] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(event.target.checked);
  };

  //size
  const SelectSizeDataValues = [
    { selectDataLabel: "small", selectDataValue: "small" },
    { selectDataLabel: "medium", selectDataValue: "medium" },
  ];
  const [selectSize, setSelectSize] = useState<string[]>([]);

  const handleSelectSize = (event: any) => {
    const selectvalue = event.target.value;
    setSelectSize(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  const handleData = () => {
    selectValues.label = selectLabel;
    selectValues.placeholder = textPlaceholder;
    selectValues.multipleValues = multipleValues;
    selectValues.required = required;
    selectValues.size = selectSize.toString();
    selectValues.width = parseInt(selectWidth);
    selectValues.menuItems = menuItemsData;
    console.log(selectValues);
    handleOpen();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("InputFields", menuItemsData);
  };

  const handleChangeInput = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = menuItemsData.map((i) => {
      if (id === i.id) {
        console.log("aaa", event.target.name, "bb", event.target.value);
        {
          event.target.name === "selectDataLabel"
            ? (i["selectDataLabel"] = event.target.value)
            : (i["selectDataValue"] = event.target.value);
        }
      }
      return i;
    });

    setMenuItemsData(newInputFields);
  };

  const handleAddFields = () => {
    setMenuItemsData([
      ...menuItemsData,
      { id: uuidv4(), selectDataLabel: "", selectDataValue: "" },
    ]);
    console.log(menuItemsData);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...menuItemsData];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setMenuItemsData(values);
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
      <DialogTitle id="alert-dialog-title">{"Select Details"}</DialogTitle>
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
                value={selectLabel}
                onChange={handleSelectLabel}
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
              <br />
              <br />
              <TextField
                label="Width"
                required={true}
                placeholder="Enter Width"
                value={selectWidth}
                onChange={handleSelectWidth}
              />
              <br />
              <br />
              <Select
                label="Size"
                placeholder="Type To Search"
                menuItems={SelectSizeDataValues}
                multiple={false}
                value={selectSize}
                width={225}
                size="medium"
                onChange={handleSelectSize}
                required={false}
              />
            </DialogContentText>
          </TabPanel>
          <TabPanel value="2">
            <DialogContentText id="alert-dialog-description">
              <Checkbox
                label="Multiple Values"
                checked={multipleValues}
                required={true}
                onChange={handleMultipleValues}
              />
              <br />
              <form onSubmit={handleSubmit}>
                {menuItemsData.map((item) => (
                  <div>
                    <br />
                    <TextField
                      label="SelectValueLabel"
                      name="selectDataLabel"
                      required={true}
                      placeholder=""
                      value={item.selectDataLabel}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => handleChangeInput(item.id, e)}
                    />
                    &nbsp;
                    <TextField
                      label="SelectValue"
                      name="selectDataValue"
                      required={true}
                      placeholder=""
                      value={item.selectDataValue}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => handleChangeInput(item.id, e)}
                    />
                    {menuItemsData.length !== 1 ? (
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

export default SelectData;
