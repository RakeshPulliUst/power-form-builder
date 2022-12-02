import React from "react";
import {
  MuiButton,
  MuiRadioButton,
  MuiTextArea,
  MuiCheckBox,
  MuiSelect,
} from "@power-form-builder/ui-components";
import { MuiCard } from "@power-form-builder/ui-components";
import { MuiStack } from "@power-form-builder/ui-components";
import { MuiTextField } from "@power-form-builder/ui-components";
import { useRef } from "react";

function UIComponents() {
  const inputRef = useRef<HTMLInputElement>(null);
  const radioInputs = [
    { name: "radio_1" },
    { name: "radio_2" },
    { name: "radio_3" },
    { name: "radio_4" },
  ];

  const menuItems = [
    { selectDataLabel: "Select1", selectDataValue: "select_1" },
    { selectDataLabel: "Select2", selectDataValue: "select_2" },
  ];

  return (
    <div>
      <MuiStack width="200px" direction="row" spacing={2} padding={5}>
        <MuiCard minWidth={275}>
          {/* <MuiButton label="Click Me" color="success" size="medium" /> */}
          {/* <MuiTextField label="FirstName" required={true} />
          <MuiTextArea placeholder="Enter Text" required={true} width={180} />
          <MuiTextField label="Password" required={true} type={"password"} /> */}
          {/* <MuiCheckBox label="Checkbox" required={true} /> */}
          {/* <MuiRadioButton
            label="RadioButton"
            radioInputs={radioInputs}
            required={true}
          /> */}
          {/* <MuiSelect
            label="Select"
            placeholder="Enter "
            values=
            menuItems={menuItems}
            multiple={false}
            size="medium"
            required={true}
          /> */}
        </MuiCard>

        <MuiCard minWidth={275}>
          <h2>Hello Here</h2>
        </MuiCard>
      </MuiStack>
    </div>
  );
}

export default UIComponents;
