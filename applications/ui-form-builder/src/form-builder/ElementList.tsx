import React from "react";
import { Element } from "./ElementInterface";
import SingleElement from "./SingleElement";
import { Droppable } from "react-beautiful-dnd";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import FixedComponentList from "./FixedComponentList";

interface props {
  show: boolean;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  setCompletedElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  CompletedElements: Array<Element>;
}

const ElementList: React.FC<props> = ({
  show,
  elements,
  CompletedElements,
  setCompletedElements,
}) => {
  return (
    <>
      <Grid>
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
                    {element.element === "Column" ? (
                      <>
                        <Grid>
                          <GridItem xs={5} md={6}>
                            <h1>Hello</h1>
                          </GridItem>
                          <GridItem xs={5} md={6}>
                            <h1>Hii</h1>
                          </GridItem>
                        </Grid>
                      </>
                    ) : (
                      <> </>
                    )}
                    <SingleElement
                      show={show}
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
        </GridItem>
      </Grid>
    </>
  );
};

export default ElementList;
