import {
  MuiButton,
  MuiCard,
  MuiStack,
} from "@power-form-builder/ui-components";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const MUIComponents = () => {
  const compo: string[] = ["j", "1"];

  const components = [
    { name: "Button" },
    { name: "TextField" },
    { name: "Password" },
    { name: "TextArea" },
    { name: "Select" },
    { name: "CheckBox" },
    { name: "RadioButton" },
  ];

  const handleClick = (name: string) => {
    if (name === "Button") {
      // compo.push(name);
      console.log(compo);
    }
  };

  return (
    <>
      <h1 style={{ position: "relative" }}>Form Builder</h1>
      <MuiStack width="200px" direction="row" spacing={2} padding={5}>
        <MuiCard minWidth={235}>
          <MuiStack width="150px" direction="column" spacing={2} padding={3}>
            {components.map((item, index) => (
              <MuiButton
                label={item.name}
                color="success"
                size="medium"
                onClick={() => handleClick(item.name)}
              />
            ))}
          </MuiStack>
        </MuiCard>

        <MuiCard minWidth={275}>
          <h2>Hello Here</h2>
        </MuiCard>
      </MuiStack>
    </>
  );
};

export default MUIComponents;
