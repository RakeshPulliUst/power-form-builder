import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Select,
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
import { SelectDiaglog } from "../DialogInterface";
import { v4 as uuidv4 } from "uuid";
import {
  AddCircleIcon1,
  RemoveCircleIcon1,
} from "@power-form-builder/ui-components";
import { Element } from "../ElementInterface";

type Props = {
  id: string;
  selectDataLabel: string;
  selectDataValue: string;
}[];

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type ValidateProps = {
  required: boolean;
};

const SelectData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  selectValues: SelectDiaglog;
  element: Element;
}> = ({ open, handleClose, selectValues, handleOpen, element }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
  const [validate, setValidate] = useState<ValidateProps>({
    required: false,
  });

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
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ ...validate, required: event.target.checked });
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
    selectValues.size = selectSize.toString();
    selectValues.width = parseInt(selectWidth);
    selectValues.menuItems = menuItemsData;
    selectValues.validate = validate;
    handleOpen();
  };

  useEffect(() => {
    setSelectLabel(element.label!);
    setTextPlaceholder(element.placeholder!);
    setMultipleValues(element.multipleValues!);
    setValidate(element.validate!);
    setSelectSize([element.size!]);
    setSelectWidth(element.width?.toString()!);
    setMenuItemsData(element.menuItems!);
  }, [
    element.label,
    element.menuItems,
    element.multipleValues,
    element.placeholder,
    element.validate,
    element.size,
    element.width,
  ]);

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

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Data", value: "2" },
    { label: "Validation", value: "3" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="Select Details">
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
          <br />
          <TextField
            label="Label"
            required={true}
            value={selectLabel}
            onChange={handleSelectLabel}
            variant={"outlined"}
            sx={{ ml: 1 }}
          />
          <br />
          <br />
          <TextField
            label="Placeholder"
            required={true}
            placeholder={textPlaceholder}
            value={textPlaceholder}
            onChange={handleTextPlaceholder}
            variant={"outlined"}
            sx={{ ml: 1 }}
          />
          <br />
          <br />
          <TextField
            label="Width"
            required={true}
            placeholder="Enter Width"
            value={selectWidth}
            onChange={handleSelectWidth}
            variant={"outlined"}
            sx={{ ml: 1 }}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Checkbox
            label="Multiple Values"
            checked={multipleValues}
            required={true}
            onChange={handleMultipleValues}
          />
          <br />

          {menuItemsData.map((item) => (
            <div>
              <br />
              <TextField
                label="SelectValueLabel"
                name="selectDataLabel"
                required={true}
                placeholder=""
                value={item.selectDataLabel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  handleChangeInput(item.id, e)
                }
                variant={"outlined"}
              />
              &nbsp;
              <TextField
                label="SelectValue"
                name="selectDataValue"
                required={true}
                placeholder=""
                value={item.selectDataValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  handleChangeInput(item.id, e)
                }
                variant={"outlined"}
              />
              {menuItemsData.length !== 1 ? (
                <span
                  className="icon"
                  onClick={() => handleRemoveFields(item.id)}
                >
                  <RemoveCircleIcon1 />
                </span>
              ) : (
                <></>
              )}
              <span className="icon" onClick={handleAddFields}>
                <AddCircleIcon1 />
              </span>
            </div>
          ))}
          <br />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Checkbox
            label="Required"
            checked={validate.required}
            required={true}
            onChange={handleCheckboxChange}
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

export default SelectData;
