import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Element } from "./ElementInterface";
import { Draggable } from "react-beautiful-dnd";
import { BsAsterisk } from "react-icons/bs";
import { TbSquareAsterisk } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

import "./styles.css";
import {
  MuiButton,
  MuiCheckBox,
  MuiRadioButton,
  MuiSelect,
  MuiTextArea,
  MuiTextField,
} from "@power-form-builder/ui-components";
import TextFieldData from "./components/TextFieldData";
import {
  ButtonDialog,
  CheckBoxDiaglog,
  RadioButtonDialog,
  SelectDiaglog,
  TextAreaDiaglog,
  TextFieldDiaglog,
} from "./DialogInterface";
import TextAreaData from "./components/TextAreaData";
import CheckBoxData from "./components/CheckBoxData";
import SelectData from "./components/SelectData";
import ButtonData from "./components/ButtonData";
import RadioButtonData from "./components/RadioButtonData";

type Props = {
  id: string;
  selectDataLabel: string;
  selectDataValue: string;
}[];

type RadioProps = {
  radioButtonDataLabel: string;
  radioButtonDataValue: string;
}[];

const SingleElement: React.FC<{
  index: number;
  element: Element;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  editable: boolean;
}> = ({ index, element, elements, setElements, editable }) => {
  const textFieldValues: TextFieldDiaglog = {
    label: "default",
    required: false,
    placeholder: "default",
    minLength: "",
    maxLength: "",
  };

  const textAreaValues: TextAreaDiaglog = {
    label: "",
    required: false,
    placeholder: "",
    minRows: "",
    width: "",
  };

  const checkBoxValues: CheckBoxDiaglog = {
    label: "",
    required: false,
    default: false,
    checked: false,
    error: "",
  };

  const buttonValues: ButtonDialog = {
    label: "",
    theme: [],
    size: [],
  };

  const menuItemsData: Props = [
    { id: "", selectDataLabel: "", selectDataValue: "" },
  ];

  const selectValues: SelectDiaglog = {
    label: "",
    placeholder: "",
    multipleValues: false,
    required: false,
    size: [],
    textFieldWidth: 0,
    menuItems: menuItemsData,
  };

  const radioItemsData: RadioProps = [
    { radioButtonDataLabel: "Male", radioButtonDataValue: "Male" },
    { radioButtonDataLabel: "Female", radioButtonDataValue: "Female" },
  ];

  const radiobuttonValues: RadioButtonDialog = {
    label: "",
    options: [],
    radioItems: radioItemsData,
    required: false,
  };

  const [edit, setEdit] = useState<boolean>(false);
  const [editElement, setEditElement] = useState<string>(element.element);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

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

  //TextField
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Opened");
    console.log(open);
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(!open);
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
      element.label = buttonValues.label;
      element.theme = buttonValues.theme;
      element.size = buttonValues.size;
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = textFieldValues.label;
      element.placeholder = textFieldValues.placeholder;
      element.maxLength = textFieldValues.maxLength;
      element.minLength = textFieldValues.minLength;
      element.required = textFieldValues.required;
    } else if (element.element === "Password") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = textFieldValues.label;
      element.placeholder = textFieldValues.placeholder;
      element.maxLength = textFieldValues.maxLength;
      element.minLength = textFieldValues.minLength;
      element.required = textFieldValues.required;
    } else if (element.element === "TextArea") {
      console.log(textAreaValues);
      console.log("JSON", JSON.stringify(textAreaValues));
      element.label = textAreaValues.label;
      element.placeholder = textAreaValues.placeholder;
      element.minRows = textAreaValues.minRows;
      element.width = textAreaValues.width;
      element.required = textAreaValues.required;
    } else if (element.element === "Select") {
      console.log(selectValues);
      console.log("JSON", JSON.stringify(selectValues));
      element.label = selectValues.label;
      element.placeholder = selectValues.placeholder;
      element.multipleValues = selectValues.multipleValues;
      element.menuItems = selectValues.menuItems;
      element.required = selectValues.required;
      element.size = selectValues.size;
      element.textFieldWidth = selectValues.textFieldWidth;
    } else if (element.element === "CheckBox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
      element.label = checkBoxValues.label;
      element.default = checkBoxValues.default;
      element.error = checkBoxValues.error;
      element.required = checkBoxValues.required;
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
      element.label = radiobuttonValues.label;
      element.options = radiobuttonValues.options;
      element.radioItems = radiobuttonValues.radioItems;
      element.required = radiobuttonValues.required;
    }
  };

  const handleClose = () => {
    console.log(element.element);
    setOpen(!open);
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
    } else if (element.element === "TextArea") {
      console.log(textAreaValues);
      console.log("JSON", JSON.stringify(textAreaValues));
    } else if (element.element === "Select") {
      console.log(selectValues);
      console.log("JSON", JSON.stringify(selectValues));
    } else if (element.element === "CheckBox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
    }
    setEdit(!edit);

    // console.log(selectValues.menuItems);
    //console.log(menuItemsData);
    //menuItemsData.push({ id: "4", selectDataLabel: "2", selectDataValue: "2" });
    // console.log(menuItemsData);
  };

  // Final TextField
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    console.log(textFieldValue);
  };

  //Final TextArea
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
    console.log(textAreaValue);
  };

  //Final Checkbox
  const [checked, setChecked] = useState(false);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //Final Select
  const [selectData, setSelectData] = useState<string[]>([]);

  const handleSelectData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectvalue = event.target.value;
    setSelectData(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  //Final Button
  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked");
  };

  //Final Radio Button
  const [radioButtonData, setRadioButtonData] = useState<string[]>([]);

  const handleRadioButtonData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const radioButtonDatavalue = event.target.value;
    setRadioButtonData(
      typeof radioButtonDatavalue === "string"
        ? radioButtonDatavalue.split(",")
        : radioButtonDatavalue
    );
  };

  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const [textFieldStatus, setTextFieldStatus] = useState(false);
  return (
    <Draggable draggableId={element.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`elements__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          <>
            {element.element === "TextField" ? (
              <>
                <TextFieldData
                  open={open}
                  handleClose={handleClose}
                  textFieldValues={textFieldValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />
                <MuiTextField
                  label={textFieldValues.label}
                  required={textFieldValues.required}
                  placeholder={textFieldValues.placeholder}
                  value={textFieldValue}
                  onChange={handleTextFieldValue}
                  minLength={parseInt(textFieldValues.minLength)}
                  maxLength={parseInt(textFieldValues.maxLength)}
                  // type="password"
                ></MuiTextField>
              </>
            ) : element.element === "TextArea" ? (
              <>
                <TextAreaData
                  open={open}
                  handleClose={handleClose}
                  textAreaValues={textAreaValues}
                  handleOpen={handleOpen}
                ></TextAreaData>

                <MuiTextArea
                  label={textAreaValues.label}
                  required={textAreaValues.required}
                  placeholder={textAreaValues.placeholder}
                  value={textAreaValue}
                  onChange={handleTextAreaValue}
                  minRows={parseInt(textAreaValues.minRows)}
                  width={parseInt(textAreaValues.width)}
                ></MuiTextArea>
              </>
            ) : element.element === "Password" ? (
              <>
                <TextFieldData
                  open={open}
                  handleClose={handleClose}
                  textFieldValues={textFieldValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />

                <MuiTextField
                  label={textFieldValues.label}
                  required={textFieldValues.required}
                  placeholder={textFieldValues.placeholder}
                  value={textFieldValue}
                  onChange={handleTextFieldValue}
                  minLength={parseInt(textFieldValues.minLength)}
                  maxLength={parseInt(textFieldValues.maxLength)}
                  type="password"
                ></MuiTextField>
              </>
            ) : element.element === "CheckBox" ? (
              <>
                <CheckBoxData
                  open={open}
                  handleClose={handleClose}
                  checkBoxValues={checkBoxValues}
                  handleOpen={handleOpen}
                ></CheckBoxData>

                <MuiCheckBox
                  label={checkBoxValues.label}
                  required={checkBoxValues.required}
                  defaultChecked={checkBoxValues.default}
                  checked={checked}
                  onChange={handleCheck}
                />
              </>
            ) : element.element === "Select" ? (
              <>
                <SelectData
                  open={open}
                  handleClose={handleClose}
                  selectValues={selectValues}
                  handleOpen={handleOpen}
                ></SelectData>

                <MuiSelect
                  label={selectValues.label}
                  placeholder={selectValues.placeholder}
                  menuItems={menuItemsData}
                  multiple={selectValues.multipleValues}
                  values={selectData}
                  onChange={handleSelectData}
                  size="medium"
                  required={selectValues.required}
                />
              </>
            ) : element.element === "Button" ? (
              <>
                <ButtonData
                  open={open}
                  handleClose={handleClose}
                  buttonValues={buttonValues}
                  handleOpen={handleOpen}
                ></ButtonData>

                <MuiButton
                  label={buttonValues.label}
                  color={
                    buttonValues.size.pop() === "primary"
                      ? "primary"
                      : buttonValues.size.pop() === "secondary"
                      ? "secondary"
                      : buttonValues.size.pop() === "info"
                      ? "info"
                      : buttonValues.size.pop() === "success"
                      ? "success"
                      : buttonValues.size.pop() === "warning"
                      ? "warning"
                      : buttonValues.size.pop() === "error"
                      ? "error"
                      : "inherit"
                  }
                  size={
                    buttonValues.size.pop() === "small"
                      ? "small"
                      : buttonValues.size.pop() === "medium"
                      ? "medium"
                      : "large"
                  }
                  onClick={handleButton}
                />
              </>
            ) : element.element === "RadioButton" ? (
              <>
                <RadioButtonData
                  open={open}
                  handleClose={handleClose}
                  radiobuttonValues={radiobuttonValues}
                  handleOpen={handleOpen}
                />

                <MuiRadioButton
                  label={radiobuttonValues.label}
                  options={
                    radiobuttonValues.options.pop() === "top"
                      ? "top"
                      : radiobuttonValues.options.pop() === "bottom"
                      ? "bottom"
                      : radiobuttonValues.options.pop() === "start"
                      ? "start"
                      : "end"
                  }
                  radioItems={radiobuttonValues.radioItems}
                  required={radiobuttonValues.required}
                  value={radioValue}
                  onChange={handleRadioChange}
                />
              </>
            ) : element.element === "Column" ? (
              <>
                <h1>Working on Column</h1>
              </>
            ) : (
              <>
                <h1>Not Valid Component</h1>
              </>
            )}

            {editable ? (
              <>
                <div>
                  <span
                    className="icon"
                    onClick={() => {
                      setEdit(!edit);
                      handleClickOpen();
                    }}
                  >
                    {edit ? <AiFillEdit /> : <FaEdit />}
                  </span>

                  <span
                    className="icon"
                    onClick={() => handleDelete(element.id)}
                  >
                    <AiFillDelete />
                  </span>
                </div>
              </>
            ) : (
              <></>
            )}
{textFieldStatus ? (
              <MuiTextField
                label={textFieldValues.label}
                required={textFieldValues.required}
                placeholder={textFieldValues.placeholder}
                value={textFieldValue}
                onChange={handleTextFieldValue}
                minLength={parseInt(textFieldValues.minLength)}
                maxLength={parseInt(textFieldValues.maxLength)}
                // type="password"
              ></MuiTextField>
            ) : (
              <>
                <h1>Hello</h1>
              </>
            )}
          </>
        </form>
      )}
    </Draggable>
  );
};

export default SingleElement;
