import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  TextField,
  Divider,
  CloseIcon,
  TabPanel,
  Tabs,
} from "@power-form-builder/ui-components";
import { ButtonDialog } from "../DialogInterface";
import { Element } from "../ElementInterface";

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

const ButtonData: React.FC<{
  open: boolean;
  handleClose: () => void;
  buttonValues: ButtonDialog;
  handleOpen: () => void;
  element: Element;
}> = ({ open, handleClose, buttonValues, handleOpen, element }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ButtonThemeValues = [
    { selectDataLabel: "primary", selectDataValue: "primary" },
    { selectDataLabel: "secondary", selectDataValue: "secondary" },
    { selectDataLabel: "info", selectDataValue: "info" },
    { selectDataLabel: "success", selectDataValue: "success" },
    { selectDataLabel: "error", selectDataValue: "error" },
    { selectDataLabel: "inherit", selectDataValue: "inherit" },
    { selectDataLabel: "warning", selectDataValue: "warning" },
  ];

  const ButtonSizeDataValues = [
    { selectDataLabel: "small", selectDataValue: "small" },
    { selectDataLabel: "medium", selectDataValue: "medium" },
    { selectDataLabel: "large", selectDataValue: "large" },
  ];

  //TextField
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttonTheme, setButtonTheme] = useState<string[]>([]);
  const [buttonSize, setButtonSize] = useState<string[]>([]);

  const handleButtonLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonLabel(event.target.value);
    console.log(buttonLabel);
  };

  const handleButtonTheme = (event: any) => {
    const selectvalue = event.target.value;
    console.log(selectvalue);
    setButtonTheme(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log(buttonTheme);
  };

  const handleButtonSize = (event: any) => {
    const selectvalue = event.target.value;
    console.log(selectvalue);
    setButtonSize(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log(buttonSize);
  };

  const handleData = () => {
    console.log(element);
    buttonValues.label = buttonLabel;
    buttonValues.theme = buttonTheme.toString();
    buttonValues.size = buttonSize.toString();

    console.log(buttonValues);
    handleOpen();
  };

  useEffect(() => {
    setButtonLabel(element.label!);
    setButtonTheme([element.theme!]);
    setButtonSize([element.size!]);
  }, [element.label, element.size, element.theme]);

  const tabItems: TabItemsProps = [{ label: "Display", value: "1" }];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="Button Details">
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
            value={buttonLabel}
            onChange={handleButtonLabel}
            variant={"outlined"}
            sx={{ m: 1 }}
          />
          <br />
          <Select
            label="Theme"
            placeholder="Type To Search"
            menuItems={ButtonThemeValues}
            multiple={false}
            value={buttonTheme}
            onChange={handleButtonTheme}
            width={225}
            size="medium"
            required={false}
          />
          <br />
          <Select
            label="Size"
            placeholder="Type To Search"
            menuItems={ButtonSizeDataValues}
            multiple={false}
            value={buttonSize}
            onChange={handleButtonSize}
            width={225}
            size="medium"
            required={false}
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

export default ButtonData;
