import React from "react";
import { Element } from "./ElementInterface";
import SingleElement from "./SingleElement";
import { Droppable } from "react-beautiful-dnd";
import {
  MuiButton,
  MuiGrid,
  MuiGridItem,
  MuiTextField,
} from "@power-form-builder/ui-components";
import FixedComponentList from "./FixedComponentList";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

interface props {
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  setCompletedElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  CompletedElements: Array<Element>;
}

const ElementList: React.FC<props> = ({
  elements,
  setElements,
  CompletedElements,
  setCompletedElements,
}) => {
  return (
    <>
      <MuiGrid>
        <MuiGridItem xs={4} md={4}>
          <Droppable droppableId="ElementsList" isDropDisabled={true}>
            {(provided, snapshot) => (
              <div
                className={`elements ${
                  snapshot.isDraggingOver ? "dragactive" : ""
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="elements__heading">Components</span>
                {elements?.map((element, index) => (
                  <FixedComponentList
                    index={index}
                    element={element}
                    key={element.id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </MuiGridItem>

        <MuiGridItem xs={10} md={12}>
          <Droppable droppableId="FormElements">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`elements  ${
                  snapshot.isDraggingOver ? "dragcomplete" : "remove"
                }`}
              >
                <span className="elements__heading">Form Elements</span>
                {CompletedElements?.map((element, index) => (
                  <>
                    <SingleElement
                      index={index}
                      elements={CompletedElements}
                      element={element}
                      key={element.id}
                      setElements={setCompletedElements}
                      editable={true}
                    />
                  </>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </MuiGridItem>
      </MuiGrid>
    </>
  );
};

export default ElementList;
