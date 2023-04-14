import React from "react";
import { Element } from "./ElementInterface";
import { Draggable } from "react-beautiful-dnd";

import "./styles.css";

const FixedComponentList: React.FC<{
  index: number;
  element: Element;
}> = ({ index, element }) => {
  return (
    <Draggable draggableId={element.id!.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`elements__single_fixed ${
            snapshot.isDragging ? "drag" : ""
          }`}
        >
          <span className="elements__single--text">{element.element}</span>
        </div>
      )}
    </Draggable>
  );
};

export default FixedComponentList;
