import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Element } from "./ElementInterface";
import { Draggable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";

import "./styles.css";

import {
  Button,
  Checkbox,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
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
  show: boolean;
  index: number;
  element: Element;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  editable: boolean;
}> = ({ show, index, element, elements, setElements, editable }) => {
  const textFieldValues: TextFieldDiaglog = {
    label: "TextField",
    required: false,
    placeholder: "Enter TextField",
    minLength: 0,
    maxLength: 0,
  };

  const passwordValues: TextFieldDiaglog = {
    label: "Password",
    required: false,
    placeholder: "Enter Password",
    minLength: 0,
    maxLength: 0,
  };

  const emailValues: TextFieldDiaglog = {
    label: "Email",
    required: false,
    placeholder: "Enter Email",
    minLength: 0,
    maxLength: 0,
  };

  const textAreaValues: TextAreaDiaglog = {
    label: "TextArea",
    required: false,
    placeholder: "Enter TextArea",
    minRows: "",
    width: "",
  };

  const checkBoxValues: CheckBoxDiaglog = {
    label: "Checkbox",
    required: false,
    default: false,
    checked: false,
    error: "",
  };

  const buttonValues: ButtonDialog = {
    label: "Button",
    theme: ["secondary"],
    size: ["large"],
  };

  const menuItemsData: Props = [
    { id: "Select1", selectDataLabel: "Select1", selectDataValue: "Select1" },
  ];

  const selectValues: SelectDiaglog = {
    label: "Select",
    placeholder: "Select the option",
    multipleValues: false,
    required: false,
    size: ["medium"],
    textFieldWidth: 220,
    menuItems: menuItemsData,
  };

  const radioItemsData: RadioProps = [
    { radioButtonDataLabel: "Male", radioButtonDataValue: "Male" },
    { radioButtonDataLabel: "Female", radioButtonDataValue: "Female" },
  ];

  const radiobuttonValues: RadioButtonDialog = {
    label: "RadioButton",
    options: [],
    radioItems: radioItemsData,
    required: false,
  };

  const [edit, setEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleDelete = (id: number) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  //TextField
  const [open, setOpen] = React.useState(show);

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
      element.label = passwordValues.label;
      element.placeholder = passwordValues.placeholder;
      element.maxLength = passwordValues.maxLength;
      element.minLength = passwordValues.minLength;
      element.required = passwordValues.required;
    } else if (element.element === "Email") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = emailValues.label;
      element.placeholder = emailValues.placeholder;
      element.maxLength = emailValues.maxLength;
      element.minLength = emailValues.minLength;
      element.required = emailValues.required;
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
    handleDelete(element.id);
    setOpen(!open);
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
    } else if (element.element === "Password") {
      console.log(passwordValues.label);
      console.log("JSON", JSON.stringify(passwordValues));
    } else if (element.element === "Email") {
      console.log(emailValues.label);
      console.log("JSON", JSON.stringify(emailValues));
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
  };

  // Final TextField
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    console.log(textFieldValue);
  };

  // Final Password
  const [passwordValue, setPasswordValue] = useState("");

  const handlePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
    console.log(passwordValue);
  };

  // Final Email
  const [emailValue, setEmailValue] = useState("");

  const handleEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
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

  //Final
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const [textFieldStatus, setTextFieldStatus] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Draggable draggableId={element.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`elements__single ${snapshot.isDragging ? "drag" : ""}`}
          onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}
          // style={{ width: "166px" }}
        >
          <>
            {element.element === "TextField" ? (
              <>
                <TextFieldData
                  open={open}
                  handleClose={handleClose}
                  textFieldValues={textFieldValues}
                  handleOpen={handleOpen}
                  element={element.element}
                  textFieldStatus={textFieldStatus}
                />
                <TextField
                  label={textFieldValues.label}
                  required={textFieldValues.required}
                  placeholder={textFieldValues.placeholder}
                  value={textFieldValue}
                  onChange={handleTextFieldValue}
                  minLength={textFieldValues.minLength}
                  maxLength={textFieldValues.maxLength}
                  // type="password"
                ></TextField>
              </>
            ) : element.element === "TextArea" ? (
              <>
                <TextAreaData
                  open={open}
                  handleClose={handleClose}
                  textAreaValues={textAreaValues}
                  handleOpen={handleOpen}
                ></TextAreaData>

                <TextareaAutosize
                  label={textAreaValues.label}
                  required={textAreaValues.required}
                  placeholder={textAreaValues.placeholder}
                  value={textAreaValue}
                  onChange={handleTextAreaValue}
                  minRows={parseInt(textAreaValues.minRows)}
                  width={parseInt(textAreaValues.width)}
                ></TextareaAutosize>
              </>
            ) : element.element === "Password" ? (
              <>
                <TextFieldData
                  open={open}
                  element={element.element}
                  handleClose={handleClose}
                  textFieldValues={passwordValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />

                <TextField
                  label={passwordValues.label}
                  required={passwordValues.required}
                  placeholder={passwordValues.placeholder}
                  value={passwordValue}
                  onChange={handlePasswordValue}
                  minLength={passwordValues.minLength}
                  maxLength={passwordValues.maxLength}
                  type="password"
                ></TextField>
              </>
            ) : element.element === "Email" ? (
              <>
                <TextFieldData
                  open={open}
                  element={element.element}
                  handleClose={handleClose}
                  textFieldValues={emailValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />

                <TextField
                  label={emailValues.label}
                  required={emailValues.required}
                  placeholder={emailValues.placeholder}
                  value={emailValue}
                  onChange={handleEmailValue}
                  minLength={emailValues.minLength}
                  maxLength={emailValues.maxLength}
                  type="email"
                ></TextField>
              </>
            ) : element.element === "Checkbox" ? (
              <>
                <CheckBoxData
                  open={open}
                  handleClose={handleClose}
                  checkBoxValues={checkBoxValues}
                  handleOpen={handleOpen}
                ></CheckBoxData>

                <Checkbox
                  label={checkBoxValues.label}
                  required={checkBoxValues.required}
                  checked={checkBoxValues.default}
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

                <Select
                  label={selectValues.label}
                  placeholder={selectValues.placeholder}
                  menuItems={menuItemsData}
                  multiple={selectValues.multipleValues}
                  values={selectData}
                  onChange={handleSelectData}
                  size={
                    selectValues.size.pop() === "small" ? "small" : "medium"
                  }
                  required={selectValues.required}
                  textFieldWidth={selectValues.textFieldWidth}
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

                <Button
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

                <RadioGroup
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
            {showDropdown ? (
              <>
                <span
                  className="icon"
                  onClick={() => {
                    setEdit(!edit);
                    handleClickOpen();
                  }}
                >
                  {edit ? <AiFillEdit /> : <FaEdit />}
                </span>

                <span className="icon" onClick={() => handleDelete(element.id)}>
                  <AiFillDelete />
                </span>
              </>
            ) : (
              <></>
            )}
          </>
        </form>
      )}
    </Draggable>
  );
};

export default SingleElement;
