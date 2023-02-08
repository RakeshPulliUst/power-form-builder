import React from "react";
import { Element } from "./ElementInterface";
import SingleElement from "./SingleElement";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import FixedComponentList from "./FixedComponentList";

interface props {
  show: boolean;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  setCompletedElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  CompletedElements: Array<Element>;
  tabElements: Array<Element>;
  tabElements1: Array<Element>;
  setTabElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  columnElements: Array<Element>;
  setColumnElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  column1Elements: Array<Element>;
  setColumn1Elements: React.Dispatch<React.SetStateAction<Array<Element>>>;
}

const ElementList: React.FC<props> = ({
  show,
  elements,
  CompletedElements,
  setCompletedElements,
  tabElements,
  tabElements1,
  setTabElements,
  columnElements,
  setColumnElements,
  column1Elements,
  setColumn1Elements,
}) => {
  return (
    <>
      <Grid spacing={0}>
        <GridItem xs={4} md={4}>
          <Droppable droppableId="ElementsList" isDropDisabled={true}>
            {(provided, snapshot) => (
              <div
                className={`elements_fixed ${
                  snapshot.isDraggingOver ? "dragactive" : "remove"
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
        </GridItem>

        <GridItem xs={10} md={12}>
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
                      show={show}
                      index={index}
                      elements={CompletedElements}
                      element={element}
                      key={element.id}
                      setElements={setCompletedElements}
                      tabElements={tabElements}
                      tabElements1={tabElements1}
                      setTabElements={setTabElements}
                      columnElements={columnElements}
                      setColumnElements={setColumnElements}
                      column1Elements={column1Elements}
                      setColumn1Elements={setColumn1Elements}
                    />
                  </>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </GridItem>
      </Grid>
    </>
  );
};

export default ElementList;
