import React, { useState } from "react";
import "./App.css";
import ElementList from "./form-builder/ElementList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Element } from "./form-builder/ElementInterface";
import {
  MuiButton,
  MuiStack,
  MuiTextField,
} from "@power-form-builder/ui-components";
import MUIComponents from "./form-builder/MUIComponents";
import UIComponents from "./form-builder/UIComponents";
import { components } from "./form-builder/ElementInterface";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

const App = () => {
  const [elements, setElements] = useState<Array<Element>>(components);
  const [CompletedElements, setCompletedElements] = useState<Array<Element>>(
    []
  );

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    console.log({ CompletedElements });
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = elements;
    let complete = CompletedElements;

    // Source Logic
    if (source.droppableId === "ElementsList") {
      add = active[source.index];
      // active.splice(source.index, 1);
      console.log("Add-Source", add);
      // console.log("AA", active.splice(source.index, 1));
      console.log("Source[Active]:", active);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
      console.log("Source[Complete]:", complete);
    }

    // Destination Logic
    if (destination.droppableId === "ElementsList") {
      active.splice(destination.index, 0, add);
      console.log("Destination[Active]:", active);
    } else {
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      complete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", complete);
    }

    setCompletedElements(complete);
    setElements(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Form Builder</span>
          <ElementList
            elements={elements}
            setElements={setElements}
            CompletedElements={CompletedElements}
            setCompletedElements={setCompletedElements}
          />
          <MuiStack width="100px" direction="row" spacing={0} padding={5}>
            <MuiButton
              label="Submit"
              color="success"
              size="medium"
              onClick={handleClick}
            ></MuiButton>
          </MuiStack>
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
