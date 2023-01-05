import { useState } from "react";
import ElementList from "./ElementList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Element, FormJson } from "./ElementInterface";
import {
  Alert,
  Button,
  Stack,
  TextField,
} from "@power-form-builder/ui-components";
import { components, sample } from "./ElementInterface";
import { useLocation, useNavigate } from "react-router-dom";
import TextFieldData from "./components/TextFieldData";
import { TextFieldDiaglog } from "./DialogInterface";

const FormBuilder = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { formName } = location.state || {};

  const [formData, setFormData] = useState<FormJson>(sample);
  const [formJsonData, setFormJsonData] = useState("");
  const [elements, setElements] = useState<Array<Element>>(components);
  const [CompletedElements, setCompletedElements] = useState<Array<Element>>(
    []
  );

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    if (CompletedElements.length !== 0) {
      console.log({ CompletedElements });
      formData.title = formName;
      formData.components = CompletedElements;
      setFormData(formData);
      const formJsonData = JSON.stringify(formData);
      setFormJsonData(formJsonData);
      console.log(formJsonData);
      console.log(formData);
      navigate("/formrender", { state: { formData: formData } });
    } else {
      alert("Please Add Elements");
    }
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
      setShow(false);
      return;
    }

    let add;
    let active = elements;
    let complete = CompletedElements;

    if (
      source.droppableId === "FormElements" &&
      destination.droppableId === "FormElements"
    ) {
      console.log("Hellllllllll");
      setShow(false);
      add = complete[source.index];
      complete.splice(source.index, 1);
      console.log("Source[Complete]:", complete);
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      complete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", complete);
    } else {
      if (source.droppableId === "ElementsList") {
        // Source Logic
        add = active[source.index];
        console.log("Add-Source", add);
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
        {
          // alert(newAdd.element);
          setShow(true);
        }
        complete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", complete);
      }
    }
    setCompletedElements(complete);
    setElements(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Form Builder</span>
          <span className="upperButton">
            <Button
              label="Save Form"
              color="success"
              size="medium"
              onClick={handleClick}
            ></Button>
          </span>
          <ElementList
            show={show}
            elements={elements}
            setElements={setElements}
            CompletedElements={CompletedElements}
            setCompletedElements={setCompletedElements}
          />

          <Button
            label="Save Form"
            color="success"
            size="medium"
            onClick={handleClick}
          ></Button>
        </div>
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
