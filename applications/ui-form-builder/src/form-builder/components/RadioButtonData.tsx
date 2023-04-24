import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Select,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tabs,
  TabPanel,
  TextField,
  Divider,
  CloseIcon,
} from "@power-form-builder/ui-components";
import { RadioButtonDialog } from "../DialogInterface";
import { Element } from "../ElementInterface";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type Props = {
  id: string;
  radioButtonDataLabel: string;
  radioButtonDataValue: string;
}[];

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type ValidateProps = {
  required: boolean;
};

const RadioButtonData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  radiobuttonValues: RadioButtonDialog;
  element: Element;
}> = ({ open, handleClose, radiobuttonValues, handleOpen, element }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
  const [validate, setValidate] = useState<ValidateProps>({
    required: false,
  });

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

  const handleRadioOptionLabelPosition = (event: any) => {
    const selectvalue = event.target.value;
    setRadioOptionLabelPosition(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  //Checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ ...validate, required: event.target.checked });
  };

  const handleData = () => {
    console.log(radioItems);
    console.log(radiobuttonValues);
    radiobuttonValues.label = radioLabel;
    radiobuttonValues.options = radioOptionLabelPosition.toString();
    radiobuttonValues.radioItems = radioItems;
    radiobuttonValues.validate = validate;
    handleOpen();
  };

  useEffect(() => {
    setRadioLabel(element.label!);
    setRadioOptionLabelPosition([element.options!]);
    setRadioItems(element.radioItems!);
    setValidate(element.validate!);
  }, [element.label, element.options, element.radioItems, element.validate]); //element.required

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

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Data", value: "2" },
    { label: "Validation", value: "3" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="RadioButton Details">
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
            value={radioLabel}
            onChange={handleRadioLabelChange}
            variant={"outlined"}
            sx={{ m: 1 }}
          />
          <br />
          <br />
          <Select
            label="Options Label Position"
            placeholder=""
            menuItems={RadioOptionPositionValues}
            value={radioOptionLabelPosition}
            size="medium"
            required={false}
            multiple={false}
            onChange={handleRadioOptionLabelPosition}
            width={225}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {radioItems.map((item) => (
            <div>
              <br />
              <TextField
                label="RadioButtonDataLabel"
                name="radioButtonDataLabel"
                required={true}
                placeholder=""
                value={item.radioButtonDataLabel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  handleChangeInput(item.id, e)
                }
                variant={"outlined"}
              />
              &nbsp;
              <TextField
                label="RadioButtonValue"
                required={true}
                placeholder=""
                name="radioButtonDataValue"
                value={item.radioButtonDataValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  handleChangeInput(item.id, e)
                }
                variant={"outlined"}
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

export default RadioButtonData;
