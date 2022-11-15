import React, { useState } from "react";
import "./App.css";
import ElementList from "./form-builder/ElementList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Element } from "./form-builder/ElementInterface";
import { MuiButton, MuiStack } from "@power-form-builder/ui-components";
import MUIComponents from "./form-builder/MUIComponents";
import UIComponents from "./form-builder/UIComponents";
import { components } from "./form-builder/ElementInterface";

const App = () => {
  const handleClick = () => {
    console.log({ CompletedElements });
  };

  const [elements, setElements] = useState<Array<Element>>(components);
  const [CompletedElements, setCompletedElements] = useState<Array<Element>>(
    []
  );

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
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "ElementsList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
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
