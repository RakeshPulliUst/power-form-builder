import React, { useEffect, useState } from "react";
import {
  Button,
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
  DatePicker,
  Checkbox,
} from "@power-form-builder/ui-components";
import { DatePickerDialog } from "../DialogInterface";
import { Element } from "../ElementInterface";
import dayjs, { Dayjs } from "dayjs";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type ValidateProps = {
  required: boolean;
  minDate: dayjs.Dayjs;
  maxDate: dayjs.Dayjs;
};

const DatePickerData: React.FC<{
  open: boolean;
  handleClose: () => void;
  datePickerValues: DatePickerDialog;
  handleOpen: () => void;
  element: Element;
}> = ({ open, handleClose, datePickerValues, handleOpen, element }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //TextField
  const [label, setLabel] = useState("");
  const [format, setFormat] = useState<string>("");
  const [disablePast, setDisablePast] = useState<boolean>(false);
  const [disableFuture, setDisableFuture] = useState<boolean>(false);
  const [validate, setValidate] = useState<ValidateProps>({
    required: false,
    minDate: dayjs("2023-04-17T18:30:00.000Z"),
    maxDate: dayjs("2023-04-17"),
  });

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
    console.log(label);
  };

  const handleFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormat(event.target.value);
    console.log(format);
  };

  const handleDisablePast = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisablePast(event.target.checked);
    console.log(disablePast);
  };

  const handleDisableFuture = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisableFuture(event.target.checked);
    console.log(disableFuture);
  };

  const handleRequired = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ ...validate, required: event.target.checked });
  };

  const handleData = () => {
    console.log(element);
    datePickerValues.label = label;
    datePickerValues.format = format;
    datePickerValues.disablePast = disablePast;
    datePickerValues.disableFuture = disableFuture;
    datePickerValues.validate = validate;
    console.log(datePickerValues);
    handleOpen();
  };

  useEffect(() => {
    setLabel(element.label!);
    setFormat(element.format!);
    setDisablePast(element.disablePast!);
    setDisableFuture(element.disableFuture!);
    // setValidate(element.validate);
  }, [
    element.label,
    element.format,
    element.disablePast,
    element.disableFuture,
    element.validate,
  ]);

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Date", value: "2" },
    { label: "Validation", value: "3" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="DatePicker Details">
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
            value={label}
            onChange={handleLabel}
            variant={"outlined"}
            sx={{ m: 1 }}
          />
          <br />
          <TextField
            label="Format"
            required={true}
            value={format}
            onChange={handleFormat}
            variant={"outlined"}
            sx={{ m: 1 }}
          />
          <br />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Checkbox
            label="Disable Past"
            checked={disablePast}
            required={true}
            onChange={handleDisablePast}
          />
          <br />
          <Checkbox
            label="Diable Future"
            checked={disableFuture}
            required={true}
            onChange={handleDisableFuture}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Checkbox
            label="Required"
            checked={validate.required}
            required={true}
            onChange={handleRequired}
          />
          <DatePicker
            label="Select Mininum Date"
            value={validate.minDate}
            format="DD/MM/YYYY"
            onChange={(newValue: dayjs.Dayjs) => {
              setValidate({
                ...validate,
                minDate: newValue,
              });
            }}
            required={true}
          />
          <br />
          <DatePicker
            label="Select Maximum Date"
            value={validate.maxDate}
            format="DD/MM/YYYY"
            onChange={(newValue: dayjs.Dayjs) =>
              setValidate({ ...validate, maxDate: newValue })
            }
            required={true}
          />
          <br />
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

export default DatePickerData;
