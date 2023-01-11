import React, { useState } from "react";
import {
  Button,
  Dialog,
  Select,
  Tabs,
  TextField,
} from "@power-form-builder/ui-components";
import { ButtonDialog } from "../DialogInterface";

const ButtonData: React.FC<{
  open: boolean;
  handleClose: () => void;
  buttonValues: ButtonDialog;
  handleOpen: () => void;
}> = ({ open, handleClose, buttonValues, handleOpen }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
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
    // const {
    //   target: { value },
    // } = event;
    // setButtonTheme(typeof value === "string" ? value.split(",") : value);

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
    buttonValues.label = buttonLabel;
    buttonValues.theme = buttonTheme.toString();
    buttonValues.size = buttonSize.toString();
    console.log(buttonValues);
    handleOpen();
  };
  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      handleData={handleData}
      value={value}
      handleChange={handleChange}
      handleButtonClose={handleClose}
      tabItems={[
        { id: "Tab1", tabsDataLabel: "Display", tabsDataValue: "Display" },
      ]}
    >
      <Tabs
        tabItems={[
          { id: "Tab1", tabsDataLabel: "Display", tabsDataValue: "Display" },
        ]}
      >
        <TextField
          label="Label"
          required={true}
          value={buttonLabel}
          onChange={handleButtonLabel}
        />
        <br />
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
      </Tabs>
    </Dialog>
  );
};

export default ButtonData;
