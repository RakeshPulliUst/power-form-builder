import { useState, useEffect } from "react";
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

import { addElement, clear } from "../store/formElementsSlice";
import { useDispatch } from "react-redux";

const FormBuilder = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { formName } = location.state || {};

  const storedValue = localStorage.getItem("loginState");
  const retrievedObject = JSON.parse(storedValue!);

  const [formData, setFormData] = useState<FormJson>(sample);
  const [finalSaveFormData] = useState<FinalSaveFormJson>(finalSample);
  const [formJsonData, setFormJsonData] = useState("");
  const [elements, setElements] = useState<Array<Element>>(components);
  const [CompletedElements, setCompletedElements] = useState<Array<Element>>(
    []
  );
  const [tabElements, setTabElements] = useState<Array<Element>>([]);
  const [tabElements2, setTabElements2] = useState<Array<Element>>([]);
  const [tabElements3, setTabElements3] = useState<Array<Element>>([]);
  const [tabElements4, setTabElements4] = useState<Array<Element>>([]);
  const [tabElements5, setTabElements5] = useState<Array<Element>>([]);
  const [numTabElements, setNumTabElements] = useState<Array<Element[]>>([]);
  const [columnElements, setColumnElements] = useState<Array<Element>>([]);
  const [column1Elements, setColumn1Elements] = useState<Array<Element>>([]);

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Creating function to post data on server
  const postDatatoServer = (data: any) => {
    axios.post(`http://localhost:4000/api/form`, data).then(
      (response) => {
        toast.success("Form Added Successfully");
        console.log("Done");
        console.log(response);
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };

  let generatedNumbers: number[] = [];

  function generatedUniqueInt(max: number) {
    let uniqueInt = Math.floor(Math.random() * max);
    while (generatedNumbers.includes(uniqueInt)) {
      uniqueInt = Math.floor(Math.random() * max);
    }
    generatedNumbers.push(uniqueInt);
    return uniqueInt;
  }

  const updateKeyWithLowercaseLabel = (formData: FormJson) => {
    const labelCounts: { [label: string]: number } = {};

    const updatedComponents = formData.components.map((component) => {
      const lowercaseLabel = component.label!.toLowerCase().replace(/\s/g, "_");
      const count = labelCounts[lowercaseLabel] || 0;
      labelCounts[lowercaseLabel] = count + 1;

      const key = count > 0 ? `${lowercaseLabel}_${count}` : lowercaseLabel;

      return {
        ...component,
        key: key,
      };
    });

    console.log(updatedComponents);
    return updatedComponents;
  };

  const handleClick = () => {
    if (CompletedElements.length !== 0) {
      console.log("Completed Elements", { CompletedElements });
      console.log({ tabElements });
      console.log({ tabElements2 });
      console.log({ tabElements3 });
      console.log({ tabElements4 });
      console.log({ tabElements5 });
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
      const updatedFormDataComponents = updateKeyWithLowercaseLabel(formData);
      console.log(updatedFormDataComponents);
      formData.components = updatedFormDataComponents;
      finalSaveFormData.id = generatedUniqueInt(1000);
      console.log(finalSaveFormData.id, "Idddd");
      finalSaveFormData.form_title = formData.form_title;
      finalSaveFormData.components = formData.components;
      finalSaveFormData.owner = retrievedObject.user?.email!;
      finalSaveFormData.date_created = new Date().toLocaleString() + "";
      finalSaveFormData.date_modified = new Date().toLocaleString() + "";
      finalSaveFormData.status = "Completed";
      postDatatoServer(finalSaveFormData);
      navigate("/formrender", { state: { formData: formData } });
      console.log("Final..numTab", numTabElements, finalSaveFormData);
    } else {
      alert("Please Add Elements");
    }
    dispatch(clear());
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    console.log(result);
    //If we try to drop on empty space where destination is not present
    if (!destination) {
      return;
    }

    //If source & destination is same then we do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      setShow(false);
      return;
    }

    let add: any;
    let active = elements;
    let complete = CompletedElements;
    let tabComplete = tabElements;
    let tabComplete2 = tabElements2;
    let tabComplete3 = tabElements3;
    let tabComplete4 = tabElements4;
    let tabComplete5 = tabElements5;

    let columnComplete = columnElements;
    let column1Complete = column1Elements;
    console.log("TTTTTTTTTTTT", source.droppableId);
    console.log("TTTTTTTTTTTT", destination.droppableId);

    // Take that elemenet from Source Logic
    if (source.droppableId === "ElementsList") {
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
    } else if (
      source.droppableId === "tabsDroppableId" ||
      source.droppableId === "tabsDroppableId2" ||
      source.droppableId === "tabsDroppableId3" ||
      source.droppableId === "tabsDroppableId4" ||
      source.droppableId === "tabsDroppableId5"
    ) {
      console.log("TTTTTTTTTTTT", source.droppableId);
      if (source.droppableId === "tabsDroppableId") {
        add = tabComplete[source.index];
        tabComplete.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete);
      } else if (source.droppableId === "tabsDroppableId2") {
        add = tabComplete2[source.index];
        tabComplete2.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete2);
      } else if (source.droppableId === "tabsDroppableId3") {
        add = tabComplete3[source.index];
        tabComplete3.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete3);
      } else if (source.droppableId === "tabsDroppableId4") {
        add = tabComplete4[source.index];
        tabComplete4.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete4);
      } else if (source.droppableId === "tabsDroppableId5") {
        add = tabComplete5[source.index];
        tabComplete5.splice(source.index, 1);
        console.log("Source[Complete]:", tabComplete5);
      }
    } else if (source.droppableId === "FormElements") {
      add = complete[source.index];
      complete.splice(source.index, 1);
      console.log("Source[Complete]:", complete);
    }

    //To drop at Destination Logic by adding at destination index
    // if (destination.droppableId === "ElementsList") {
    //   active.splice(destination.index, 0, add!);
    //   console.log("Destination[Active]:", active);
    // } else
    if (destination.droppableId === "columnDroppableId") {
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
    } else if (
      destination.droppableId === "tabsDroppableId" ||
      destination.droppableId === "tabsDroppableId2" ||
      destination.droppableId === "tabsDroppableId3" ||
      destination.droppableId === "tabsDroppableId4" ||
      destination.droppableId === "tabsDroppableId5"
    ) {
      console.log("TTTTTTTTTTTT", destination.droppableId);
      if (destination.droppableId === "tabsDroppableId") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        tabComplete.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", tabComplete);
      } else if (destination.droppableId === "tabsDroppableId2") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        tabComplete2.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", tabComplete2);
      } else if (destination.droppableId === "tabsDroppableId3") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        tabComplete3.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", tabComplete3);
      } else if (destination.droppableId === "tabsDroppableId4") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        tabComplete4.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", tabComplete4);
      } else if (destination.droppableId === "tabsDroppableId5") {
        let newAdd: Element = Object.assign({}, add);
        newAdd.id = randomNumberInRange(9, 100);
        newAdd.show = true;
        tabComplete5.splice(destination.index, 0, newAdd);
        console.log("Add", add);
        console.log("Destination[Complete]:", tabComplete5);
      }
    } else if (destination.droppableId === "FormElements") {
      let newAdd: Element = Object.assign({}, add);
      newAdd.id = randomNumberInRange(9, 100);
      newAdd.show = true;
      // setShow(true);
      complete.splice(destination.index, 0, newAdd);
      console.log("Add", add);
      console.log("Destination[Complete]:", complete);
      //dispatch(addElement(newAdd));
      console.log("Added to store");
    }

    setTabElements(tabComplete);
    setTabElements2(tabComplete2);
    setTabElements3(tabComplete3);
    setTabElements4(tabComplete4);
    setTabElements5(tabComplete5);
    setCompletedElements(complete);
    setElements(active);
    setColumnElements(columnComplete);
    setColumn1Elements(column1Complete);
    setNumTabElements([
      tabElements,
      tabElements2,
      tabElements3,
      tabElements4,
      tabElements5,
    ]);
    console.log("TabElements", tabElements);
    console.log("Final...", numTabElements);
  };

  useEffect(() => {
    try {
      const components = localStorage.getItem("formElementsState");
      const retrievedObject = JSON.parse(components!);
      console.log(retrievedObject);
      console.log(CompletedElements);
      setCompletedElements(retrievedObject.components);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Form Builder</span>
          <span className="upperButton">
            <Button color="success" size="medium" onClick={handleClick}>
              Save Form
            </Button>
          </span>
          <ElementList
            show={show}
            elements={elements}
            setElements={setElements}
            CompletedElements={CompletedElements}
            setCompletedElements={setCompletedElements}
            tabElements={tabElements}
            setTabElements={setTabElements}
            tabElements2={tabElements2}
            setTabElements2={setTabElements2}
            tabElements3={tabElements3}
            setTabElements3={setTabElements3}
            tabElements4={tabElements4}
            setTabElements4={setTabElements4}
            tabElements5={tabElements5}
            setTabElements5={setTabElements5}
            numTabElements={numTabElements}
            setNumTabElements={setNumTabElements}
            columnElements={columnElements}
            setColumnElements={setColumnElements}
            column1Elements={column1Elements}
            setColumn1Elements={setColumn1Elements}
          />

          <Button color="success" size="medium" onClick={handleClick}>
            Save Form
          </Button>
        </div>
      </DragDropContext>
    </>
  );
};

export default FormBuilder;
