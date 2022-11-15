import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Element } from "./ElementInterface";
import { Draggable } from "react-beautiful-dnd";
import "./styles.css";

const SingleElement: React.FC<{
  index: number;
  element: Element;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  editable: boolean;
}> = ({ index, element, elements, setElements, editable }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editElement, setEditElement] = useState<string>(element.element);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setElements(
      elements.map((element) =>
        element.id === id ? { ...element, element: editElement } : element
      )
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  const handleDone = (id: number) => {
    setElements(
      elements.map((element) =>
        element.id === id
          ? { ...element, required: !element.required }
          : element
      )
    );
  };

  return (
    <Draggable draggableId={element.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, element.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`elements__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editElement}
              onChange={(e) => setEditElement(e.target.value)}
              className="elements__single--text"
              ref={inputRef}
            />
          ) : element.required ? (
            <s className="elements__single--text">{element.element}</s>
          ) : (
            <span className="elements__single--text">{element.element}</span>
          )}

          {editable ? (
            <>
              <div>
                <span
                  className="icon"
                  onClick={() => {
                    if (!edit && !element.required) {
                      setEdit(!edit);
                    }
                  }}
                >
                  <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(element.id)}>
                  <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(element.id)}>
                  <MdDone />
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default SingleElement;
