import { useEffect, useState } from "react";
import ElementList from "./ElementList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  Element,
  FinalSaveFormJson,
  FormJson,
  finalSample,
} from "./ElementInterface";
import { Button } from "@power-form-builder/ui-components";
import { components, sample } from "./ElementInterface";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const FormBuilder = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    formId,
    formName,
    formInitialComponents,
    formCreatedDate,
    formStatus,
  } = location.state || {};

  const [formData, setFormData] = useState<FormJson>(sample);
  const [finalSaveFormData, setFinalSaveFormData] =
    useState<FinalSaveFormJson>(finalSample);
  const [formJsonData, setFormJsonData] = useState("");
  const [elements, setElements] = useState<Array<Element>>(components);
  const [CompletedElements, setCompletedElements] = useState<Array<Element>>(
    []
  );
  const [tabElements, setTabElements] = useState<Array<Element>>([]);
  const [columnElements, setColumnElements] = useState<Array<Element>>([]);
  const [column1Elements, setColumn1Elements] = useState<Array<Element>>([]);

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Edit function to edit data on server
  const editForm = (formId: number, data: any) => {
    axios.put(`http://localhost:4000/api/form/update/${formId}`, data).then(
      (response) => {
        console.log("Inside Update");
        toast.success("Updated");
        console.log(response);
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };

  const handleClick = () => {
    if (CompletedElements.length !== 0) {
      console.log({ CompletedElements });
      console.log({ tabElements });
      formData.form_title = formName;
      formData.components = CompletedElements;
      console.log(formData);
      setFormData(formData);
      console.log(formData);
      const formJsonData = JSON.stringify(formData);
      console.log(JSON.stringify(formData));
      setFormJsonData(formJsonData);
      console.log(formJsonData);
      console.log(formData);
      console.log(finalSaveFormData);
      finalSaveFormData.id = formId;
      finalSaveFormData.form_title = formData.form_title;
      finalSaveFormData.components = formData.components;
      finalSaveFormData.date_created = formCreatedDate;
      finalSaveFormData.date_modified = new Date().toLocaleString() + "";
      console.log(new Date().toLocaleString() + "");
      finalSaveFormData.status = formStatus;
      console.log(finalSaveFormData);
      editForm(formId, finalSaveFormData);
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
    const sourceIndex = result.source.index;
    const destIndex = result.destination?.index;
    let add;
    let active = elements;
    let complete = CompletedElements;
    let tabComplete = tabElements;
    let columnComplete = columnElements;
    let column1Complete = column1Elements;
    if (
      source.droppableId === "FormElements" &&
      destination.droppableId === "FormElements"
    ) {
      console.log("Hellllllllll");
      //setShow(false);
      add = complete[source.index];
      complete.splice(source.index, 1);
      console.log("Source[Complete]:", complete);
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      complete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", complete);
    } else if (
      source.droppableId === "tabsDroppableId" &&
      destination.droppableId === "tabsDroppableId"
    ) {
      console.log("Tabsssssss");
      //setShow(false);
      add = tabComplete[source.index];
      tabComplete.splice(source.index, 1);
      console.log("Source[omplete]:", tabComplete);
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      tabComplete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", tabComplete);
    } else if (
      source.droppableId === "columnDroppableId" &&
      destination.droppableId === "columnDroppableId"
    ) {
      console.log("Columns");
      //setShow(false);
      add = columnComplete[source.index];
      columnComplete.splice(source.index, 1);
      console.log("Source[omplete]:", columnComplete);
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      columnComplete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", columnComplete);
    } else if (
      source.droppableId === "column1DroppableId" &&
      destination.droppableId === "column1DroppableId"
    ) {
      console.log("Columns");
      //setShow(false);
      add = column1Complete[source.index];
      if (add.element === "Column") {
        alert("Cannot add column inside column");
      } else {
        column1Complete.splice(source.index, 1);
        console.log("Source[omplete]:", column1Complete);
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        column1Complete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", column1Complete);
      }
    } else {
      if (source.droppableId === "ElementsList") {
        // Source Logic
        add = active[source.index];
        console.log("Add-Source", add);
        console.log("Source[Active]:", active);
      } else if (source.droppableId === "columnDroppableId") {
        add = columnComplete[source.index];
        columnComplete.splice(source.index, 1);
        console.log("Source[Complete]:", columnComplete);
      } else if (source.droppableId === "column1DroppableId") {
        add = column1Complete[source.index];
        column1Complete.splice(source.index, 1);
        console.log("Source[Complete]:", column1Complete);
      } else if (source.droppableId === "column1DroppableId") {
        add = tabComplete[source.index];
        tabComplete.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
        console.log("Source[Complete]:", complete);
      }
      // Destination Logic
      if (destination.droppableId === "ElementsList") {
        active.splice(destination.index, 0, add!);
        console.log("Destination[Active]:", active);
      } else if (destination.droppableId === "columnDroppableId") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        // setShow(true);
        columnComplete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", columnComplete);
      } else if (destination.droppableId === "column1DroppableId") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        // setShow(true);
        column1Complete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", column1Complete);
      } else if (destination.droppableId === "tabsDroppableId") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        //setShow(true);

        newAdd.show = true;
        tabComplete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", complete);
      } else {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        // setShow(true);
        complete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", complete);
      }
    }

    setTabElements(tabComplete);
    setCompletedElements(complete);
    setElements(active);
    setColumnElements(columnComplete);
    setColumn1Elements(column1Complete);
  };

  useEffect(() => {
    setCompletedElements(formInitialComponents);
    formInitialComponents.map((item: any, index: number) =>
      item.element === "Tabs"
        ? item.tabItems.map((data: any) => setTabElements(data.tabComponents))
        : item.columnItems.map((data: any) =>
            data.label === "Column1"
              ? setColumnElements(data.columnComponents)
              : setColumn1Elements(data.columnComponents)
          )
    );

    console.log(formInitialComponents);
  }, []);
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Form Builder</span>
          <span className="upperButton">
            <Button
              label="Update Form"
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
            tabElements={tabElements}
            setTabElements={setTabElements}
            columnElements={columnElements}
            setColumnElements={setColumnElements}
            column1Elements={column1Elements}
            setColumn1Elements={setColumn1Elements}
          />

          <Button
            label="Update Form"
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
