import React from "react";
import { Element } from "./ElementInterface";
import SingleElement from "./SingleElement";
import { Droppable } from "react-beautiful-dnd";

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
    <div className="container">
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
              <SingleElement
                index={index}
                elements={elements}
                element={element}
                key={element.id}
                setElements={setElements}
                editable={false}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="ElementsRemove">
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
              <SingleElement
                index={index}
                elements={CompletedElements}
                element={element}
                key={element.id}
                setElements={setCompletedElements}
                editable={true}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ElementList;
