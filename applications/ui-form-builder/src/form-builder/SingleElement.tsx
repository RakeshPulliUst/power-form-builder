import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Element } from "./ElementInterface";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./styles.css";
import dayjs, { Dayjs } from "dayjs";

import {
  Button,
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Grid,
  GridItem,
  Box,
  TabPanel,
  DatePicker,
  FileUpload,
  Tabs,
} from "@power-form-builder/ui-components";
import TextFieldData from "./components/TextFieldData";
import {
  ButtonDialog,
  CheckboxDiaglog,
  ColumnDialog,
  DatePickerDialog,
  RadioButtonDialog,
  SelectDiaglog,
  TabsDialog,
  TextFieldDiaglog,
} from "./DialogInterface";
import CheckboxData from "./components/CheckboxData";
import SelectData from "./components/SelectData";
import ButtonData from "./components/ButtonData";
import RadioButtonData from "./components/RadioButtonData";
import TabsData from "./components/TabsData";
import ColumnData from "./components/ColumData";
import { addFormElements } from "../store/formElementsSlice";
import { RootState } from "../store/store";
import DatePickerData from "./components/DatePickerData";

type Props = {
  id: string;
  selectDataLabel: string;
  selectDataValue: string;
}[];

type TabProps = {
  id: string;
  dropId: string;
  tabsDataLabel: string;
  tabsDataValue: string;
  tabComponents: Element[];
}[];

type ColumnItemsProps = {
  id: string;
  label: string;
  columnDataSize: string;
  columnDataWidth: number;
  columnComponents: Element[];
}[];

type RadioProps = {
  id: string;
  radioButtonDataLabel: string;
  radioButtonDataValue: string;
}[];

type TabItemsProps = {
  label: string;
  value: string;
}[];

const SingleElement: React.FC<{
  show: boolean;
  index: number;
  element: Element;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  tabElements: Array<Element>;
  setTabElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  tabElements2: Array<Element>;
  setTabElements2: React.Dispatch<React.SetStateAction<Array<Element>>>;
  tabElements3: Array<Element>;
  setTabElements3: React.Dispatch<React.SetStateAction<Array<Element>>>;
  tabElements4: Array<Element>;
  setTabElements4: React.Dispatch<React.SetStateAction<Array<Element>>>;
  tabElements5: Array<Element>;
  setTabElements5: React.Dispatch<React.SetStateAction<Array<Element>>>;
  numTabElements: Array<Element[]>;
  setNumTabElements: React.Dispatch<React.SetStateAction<Array<Element[]>>>;
  columnElements: Array<Element>;
  setColumnElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
  column1Elements: Array<Element>;
  setColumn1Elements: React.Dispatch<React.SetStateAction<Array<Element>>>;
}> = ({
  show,
  index,
  element,
  elements,
  setElements,
  tabElements,
  setTabElements,
  tabElements2,
  setTabElements2,
  tabElements3,
  setTabElements3,
  tabElements4,
  setTabElements4,
  tabElements5,
  setTabElements5,
  numTabElements,
  setNumTabElements,
  columnElements,
  setColumnElements,
  column1Elements,
  setColumn1Elements,
}) => {
  const dispatch = useDispatch();
  const textFieldValues: TextFieldDiaglog = {
    label: "TextField",
    placeholder: "Enter TextField",
    validate: {
      required: false,
      minLength: 0,
      maxLength: 0,
    },
  };

  const passwordValues: TextFieldDiaglog = {
    label: "Password",
    placeholder: "Enter Password",
    validate: {
      required: false,
      minLength: 0,
      maxLength: 0,
    },
  };

  const emailValues: TextFieldDiaglog = {
    label: "Email",
    placeholder: "Enter Email",
    validate: {
      required: false,
      minLength: 0,
      maxLength: 0,
    },
  };

  const textAreaValues: TextFieldDiaglog = {
    label: "TextArea",
    placeholder: "Enter TextArea",
    validate: {
      required: false,
      minLength: 0,
      maxLength: 0,
      rows: 0,
    },
  };

  const checkBoxValues: CheckboxDiaglog = {
    label: "Checkbox",
    default: false,
    checked: false,
    validate: {
      error: "",
      required: false,
    },
  };

  const buttonValues: ButtonDialog = {
    label: "Button",
    theme: "secondary",
    size: "large",
  };

  const menuItemsData: Props = [
    { id: "Select1", selectDataLabel: "Select1", selectDataValue: "Select1" },
  ];

  const tabsItemsData: TabProps = [
    {
      id: "Tab1",
      dropId: "tabsDroppableId",
      tabsDataLabel: "Tab1",
      tabsDataValue: "1",
      tabComponents: [
        {
          id: 1011,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
    {
      id: "Tab2",
      dropId: "tabsDroppableId2",
      tabsDataLabel: "Tab2",
      tabsDataValue: "2",
      tabComponents: [
        {
          id: 1014,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
    {
      id: "Tab3",
      dropId: "tabsDroppableId3",
      tabsDataLabel: "Tab3",
      tabsDataValue: "3",
      tabComponents: [
        {
          id: 1015,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
    {
      id: "Tab4",
      dropId: "tabsDroppableId4",
      tabsDataLabel: "Tab4",
      tabsDataValue: "4",
      tabComponents: [
        {
          id: 1016,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
    {
      id: "Tab5",
      dropId: "tabsDroppableId5",
      tabsDataLabel: "Tab5",
      tabsDataValue: "5",
      tabComponents: [
        {
          id: 1017,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
  ];

  const columnItemsData: ColumnItemsProps = [
    {
      id: "1989",
      label: "Column1",
      columnDataSize: "md",
      columnDataWidth: 0,
      columnComponents: [
        {
          id: 1012,
          element: "Column",
          label: "Ths",
        },
      ],
    },
  ];

  const finalColumnItemsData: ColumnItemsProps = [
    {
      id: "1989",
      label: "Column1",
      columnDataSize: "md",
      columnDataWidth: 0,
      columnComponents: [
        {
          id: 1012,
          element: "Column",
          label: "Ths",
        },
      ],
    },
    {
      id: "1990",
      label: "Column2",
      columnDataSize: "md",
      columnDataWidth: 0,
      columnComponents: [
        {
          id: 1012,
          element: "Column",
          label: "Ths",
        },
      ],
    },
  ];

  const selectValues: SelectDiaglog = {
    label: "Select",
    placeholder: "Select the option",
    multipleValues: false,
    size: "medium",
    width: 220,
    menuItems: menuItemsData,
    validate: {
      required: false,
    },
  };

  const tabValues: TabsDialog = {
    label: "",
    tabItems: tabsItemsData,
  };

  const radioItemsData: RadioProps = [
    {
      id: "radio1",
      radioButtonDataLabel: "Male",
      radioButtonDataValue: "Male",
    },
    {
      id: "radio2",
      radioButtonDataLabel: "Female",
      radioButtonDataValue: "Female",
    },
  ];

  const radiobuttonValues: RadioButtonDialog = {
    label: "RadioButton",
    options: "",
    radioItems: radioItemsData,
    validate: {
      required: false,
    },
  };

  const datePickerValues: DatePickerDialog = {
    label: "DatePicker",
    format: "dd/MM/yyyy",
    disablePast: false,
    disableFuture: false,
    validate: {
      required: false,
      minDate: dayjs("2023-04-17"),
      maxDate: dayjs("2023-05-17"),
    },
  };

  const columnValues: ColumnDialog = {
    label: "Column",
    columnItems: columnItemsData,
  };

  const [edit, setEdit] = useState<boolean>(false);

  // const inputRef = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   inputRef.current?.focus();
  // });

  const handleDelete = (id: number) => {
    console.log("Iddddddd", id, element.id);
    // if (element.element === "Column") {
    //   console.log("COlumns");
    // } else if (element.element === "Tabs") {
    //   console.log("Tabsss");
    // } else {
    console.log("Elements", element);
    setElements(elements.filter((element) => element.id !== id));
    // }
    console.log(elements.filter((element) => element.id !== id));
  };

  //TextField
  const [open, setOpen] = React.useState(element.show);

  const handleClickOpen = () => {
    console.log("Opened");
    console.log(open);
    setOpen(!open);
  };

  const handleOpen = () => {
    console.log(element, element.element);
    setOpen(!open);
    element.show = true;
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
      element.label = buttonValues.label;
      element.theme = buttonValues.theme.toString();
      element.size = buttonValues.size.toString();
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = textFieldValues.label;
      element.placeholder = textFieldValues.placeholder;
      element.validate = textFieldValues.validate;
      console.log("JSON", JSON.stringify(element));
    } else if (element.element === "Password") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = passwordValues.label;
      element.placeholder = passwordValues.placeholder;
      element.validate = passwordValues.validate;
    } else if (element.element === "Email") {
      console.log(emailValues.label);
      console.log("JSON", JSON.stringify(emailValues));
      element.label = emailValues.label;
      element.placeholder = emailValues.placeholder;
      element.validate = emailValues.validate;
    } else if (element.element === "TextArea") {
      console.log(textAreaValues);
      console.log("JSON", JSON.stringify(textAreaValues));
      element.label = textAreaValues.label;
      element.placeholder = textAreaValues.placeholder;
      element.validate = textAreaValues.validate;
    } else if (element.element === "Select") {
      console.log(selectValues);
      console.log("JSON", JSON.stringify(selectValues));
      element.label = selectValues.label;
      element.placeholder = selectValues.placeholder;
      element.multipleValues = selectValues.multipleValues;
      element.menuItems = selectValues.menuItems;
      element.validate = selectValues.validate;
      element.size = selectValues.size.toString();
      element.width = selectValues.width;
    } else if (element.element === "Checkbox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
      element.label = checkBoxValues.label;
      element.default = checkBoxValues.default;
      element.validate = checkBoxValues.validate;
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
      element.label = radiobuttonValues.label;
      element.options = radiobuttonValues.options;
      element.radioItems = radiobuttonValues.radioItems;

      element.validate = radiobuttonValues.validate;
    } else if (element.element === "DatePicker") {
      element.label = datePickerValues.label;
      element.format = datePickerValues.format;
      element.disablePast = datePickerValues.disablePast;
      element.disableFuture = datePickerValues.disableFuture;
      element.validate = datePickerValues.validate;
    } else if (element.element === "Tabs") {
      console.log(tabValues);
      console.log("JSON", JSON.stringify(tabValues));
      element.label = tabValues.label;
      tabValues.tabItems.map((item, index) =>
        item.dropId === "tabsDroppableId"
          ? (item.tabComponents = tabElements)
          : item.dropId === "tabsDroppableId2"
          ? (item.tabComponents = tabElements2)
          : item.dropId === "tabsDroppableId3"
          ? (item.tabComponents = tabElements3)
          : item.dropId === "tabsDroppableId4"
          ? (item.tabComponents = tabElements4)
          : (item.tabComponents = tabElements5)
      );
      console.log(tabValues);
      element.tabItems = tabValues.tabItems;
    } else if (element.element === "Column") {
      element.label = columnValues.label;
      element.columnItems = columnValues.columnItems;
      console.log("Columnt Items", element.columnItems);
      console.log(element.columnItems);
      console.log("ColumnValues", columnValues);
      console.log("Column1Elements", columnElements);
      console.log("Column2Elements", column1Elements);
      console.log("JSON", JSON.stringify(columnValues));

      finalColumnItemsData.map((item, index) =>
        item.label === "Column1"
          ? (item.columnComponents = columnElements)
          : (item.columnComponents = column1Elements)
      );
      element.columnItems = finalColumnItemsData;
      console.log("Final", finalColumnItemsData);
      console.log("Element Column", element.columnItems);
    }
    // dispatch(addFormElements(element));
  };

  const handleClose = () => {
    console.log(element.element);
    console.log(element);
    if (element.show) {
      console.log(element.show);
      handleDelete(element.id!);
    }
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
    } else if (element.element === "Checkbox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
    } else if (element.element === "DatePicker") {
      console.log(datePickerValues);
      console.log("JSON", JSON.stringify(datePickerValues));
    } else if (element.element === "Column") {
      console.log(columnValues);
      console.log("JSON", JSON.stringify(columnValues));
    } else if (element.element === "Tabs") {
      console.log(tabValues);
      console.log("JSON", JSON.stringify(tabValues));
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
    console.log(checked);
  };

  //Final Select
  const [selectData, setSelectData] = useState<string[]>([]);

  const handleSelectData = (event: any) => {
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

  const [showDropdown, setShowDropdown] = useState(false);

  //Tabsss
  // const [value, setValue] = React.useState(1);
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   console.log(newValue);
  //   setValue(newValue);
  // };

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(value);
    setValue(newValue);
  };

  const [tabItems] = useState<TabItemsProps>([
    { label: "Tab1", value: "1" },
    { label: "Tab2", value: "2" },
    { label: "Tab3", value: "3" },
    { label: "Tab4", value: "4" },
    { label: "Tab5", value: "5" },
  ]);

  // const { components } = useSelector((state: RootState) => state.formElements);
  let inc = 0;
  return (
    <Draggable draggableId={element.id!.toString()} index={index}>
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
                  open={open!}
                  handleClose={handleClose}
                  textFieldValues={textFieldValues}
                  handleOpen={handleOpen}
                  element={element}
                />
                <TextField
                  label={textFieldValues.label}
                  placeholder={textFieldValues.placeholder}
                  value={textFieldValue}
                  onChange={handleTextFieldValue}
                  required={textFieldValues.validate.required}
                  inputProps={{
                    maxLength: textFieldValues.validate.maxLength,
                    minLength: textFieldValues.validate.minLength,
                  }}
                  variant={"outlined"}
                  // type="password"
                ></TextField>
              </>
            ) : element.element === "TextArea" ? (
              <>
                <TextFieldData
                  open={open!}
                  handleClose={handleClose}
                  textFieldValues={textAreaValues}
                  handleOpen={handleOpen}
                  element={element}
                ></TextFieldData>

                <TextField
                  label={textAreaValues.label}
                  required={textAreaValues.validate.required}
                  placeholder={textAreaValues.placeholder}
                  value={textAreaValue}
                  onChange={handleTextAreaValue}
                  rows={textAreaValues.validate.rows}
                  inputProps={{
                    maxLength: textAreaValues.validate.maxLength,
                    minLength: textAreaValues.validate.minLength,
                  }}
                  multiline={true}
                  variant={"outlined"}
                ></TextField>
              </>
            ) : element.element === "Password" ? (
              <>
                <TextFieldData
                  open={open!}
                  element={element}
                  handleClose={handleClose}
                  textFieldValues={passwordValues}
                  handleOpen={handleOpen}
                />

                <TextField
                  label={passwordValues.label}
                  required={passwordValues.validate.required}
                  placeholder={passwordValues.placeholder}
                  value={passwordValue}
                  onChange={handlePasswordValue}
                  inputProps={{
                    maxLength: passwordValues.validate.maxLength,
                    minLength: passwordValues.validate.minLength,
                  }}
                  type="password"
                  variant={"outlined"}
                ></TextField>
              </>
            ) : element.element === "Email" ? (
              <>
                <TextFieldData
                  open={open!}
                  element={element}
                  handleClose={handleClose}
                  textFieldValues={emailValues}
                  handleOpen={handleOpen}
                />

                <TextField
                  label={emailValues.label}
                  required={emailValues.validate.required}
                  placeholder={emailValues.placeholder}
                  value={emailValue}
                  onChange={handleEmailValue}
                  inputProps={{
                    maxLength: emailValues.validate.maxLength,
                    minLength: emailValues.validate.minLength,
                  }}
                  type="email"
                  variant={"outlined"}
                ></TextField>
              </>
            ) : element.element === "Checkbox" ? (
              <>
                <CheckboxData
                  open={open!}
                  handleClose={handleClose}
                  checkBoxValues={checkBoxValues}
                  handleOpen={handleOpen}
                  element={element}
                ></CheckboxData>

                <Checkbox
                  label={checkBoxValues.label}
                  required={checkBoxValues.validate.required}
                  checked={checkBoxValues.default}
                  onChange={handleCheck}
                />
              </>
            ) : element.element === "Select" ? (
              <>
                <SelectData
                  open={open!}
                  handleClose={handleClose}
                  selectValues={selectValues}
                  handleOpen={handleOpen}
                  element={element}
                ></SelectData>

                <Select
                  label={selectValues.label}
                  placeholder={selectValues.placeholder}
                  menuItems={menuItemsData}
                  multiple={selectValues.multipleValues}
                  value={selectData}
                  onChange={handleSelectData}
                  size={selectValues.size === "small" ? "small" : "medium"}
                  required={selectValues.validate.required}
                  width={selectValues.width}
                />
              </>
            ) : element.element === "Button" ? (
              <>
                <ButtonData
                  open={open!}
                  handleClose={handleClose}
                  buttonValues={buttonValues}
                  handleOpen={handleOpen}
                  element={element}
                ></ButtonData>

                {/* {components.slice(inc).map((item, index) => (
                  <Button
                    color={
                      buttonValues.size === "primary"
                        ? "primary"
                        : buttonValues.size === "secondary"
                        ? "secondary"
                        : buttonValues.size === "info"
                        ? "info"
                        : buttonValues.size === "success"
                        ? "success"
                        : buttonValues.size === "warning"
                        ? "warning"
                        : buttonValues.size === "error"
                        ? "error"
                        : "inherit"
                    }
                    size={
                      buttonValues.size === "small"
                        ? "small"
                        : buttonValues.size === "medium"
                        ? "medium"
                        : "large"
                    }
                    onClick={handleButton}
                    sx={{ mt: 1, mb: 1 }}
                  >
                    {item.label}
                  </Button>
                ))} */}
                <Button
                  color={
                    buttonValues.size === "primary"
                      ? "primary"
                      : buttonValues.size === "secondary"
                      ? "secondary"
                      : buttonValues.size === "info"
                      ? "info"
                      : buttonValues.size === "success"
                      ? "success"
                      : buttonValues.size === "warning"
                      ? "warning"
                      : buttonValues.size === "error"
                      ? "error"
                      : "inherit"
                  }
                  size={
                    buttonValues.size === "small"
                      ? "small"
                      : buttonValues.size === "medium"
                      ? "medium"
                      : "large"
                  }
                  onClick={handleButton}
                  sx={{ mt: 1, mb: 1 }}
                >
                  {buttonValues.label}
                </Button>
              </>
            ) : element.element === "RadioButton" ? (
              <>
                <RadioButtonData
                  open={open!}
                  handleClose={handleClose}
                  radiobuttonValues={radiobuttonValues}
                  handleOpen={handleOpen}
                  element={element}
                />

                <RadioGroup
                  label={radiobuttonValues.label}
                  options={
                    radiobuttonValues.options === "top"
                      ? "top"
                      : radiobuttonValues.options === "bottom"
                      ? "bottom"
                      : radiobuttonValues.options === "start"
                      ? "start"
                      : "end"
                  }
                  radioItems={radiobuttonValues.radioItems}
                  required={radiobuttonValues.validate.required}
                  value={radioValue}
                  onChange={handleRadioChange}
                />
              </>
            ) : element.element === "DatePicker" ? (
              <>
                <DatePickerData
                  open={open!}
                  handleClose={handleClose}
                  datePickerValues={datePickerValues}
                  handleOpen={handleOpen}
                  element={element}
                />

                <DatePicker
                  label={datePickerValues.label}
                  format={datePickerValues.format}
                  disablePast={datePickerValues.disablePast}
                  disableFuture={datePickerValues.disableFuture}
                  minDate={datePickerValues.validate.minDate}
                  maxDate={datePickerValues.validate.maxDate}
                  required={datePickerValues.validate.required}
                />
              </>
            ) : element.element === "FileUpload" ? (
              <FileUpload />
            ) : element.element === "Column" ? (
              <>
                <ColumnData
                  open={open!}
                  handleClose={handleClose}
                  columnValues={columnValues}
                  handleOpen={handleOpen}
                  element={element}
                />
                <Grid spacing={1}>
                  <GridItem md={7}>
                    <>
                      <div className="elements__single_column">
                        <Droppable droppableId="columnDroppableId">
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={`elements__column  ${
                                snapshot.isDraggingOver
                                  ? "dragcomplete"
                                  : "remove"
                              }`}
                            >
                              <>
                                {console.log("ColumnElements", columnElements)}
                                {columnElements?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={columnElements}
                                      element={element}
                                      key={element.id}
                                      setElements={setColumnElements}
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
                                  </>
                                ))}
                              </>
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    </>
                  </GridItem>
                  <GridItem md={7}>
                    <div className="elements__single_column">
                      <Droppable droppableId="column1DroppableId">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`elements__column  ${
                              snapshot.isDraggingOver
                                ? "dragcomplete"
                                : "remove"
                            }`}
                          >
                            {column1Elements?.map((element, index) => (
                              <>
                                <SingleElement
                                  show={show}
                                  index={index}
                                  elements={column1Elements}
                                  element={element}
                                  key={element.id}
                                  setElements={setColumn1Elements}
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
                              </>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </GridItem>
                </Grid>
              </>
            ) : element.element === "Tabs" ? (
              <>
                <TabsData
                  open={open!}
                  handleClose={handleClose}
                  tabValues={tabValues}
                  handleOpen={handleOpen}
                  element={element}
                ></TabsData>

                <div className="elements__single_tab">
                  <Box>
                    <Tabs
                      onChange={handleChange}
                      tabItems={tabItems}
                      value={value}
                    ></Tabs>
                  </Box>
                  {tabsItemsData.map((item, index) => (
                    <TabPanel value={value} index={index}>
                      <Droppable droppableId={item.dropId}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`elements__tab  ${
                              snapshot.isDraggingOver
                                ? "dragcomplete"
                                : "remove"
                            }`}
                          >
                            {item.dropId === "tabsDroppableId" ? (
                              <>
                                {console.log(
                                  item.dropId,
                                  "TabElements",
                                  tabElements
                                )}
                                {tabElements?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={tabElements}
                                      element={element}
                                      key={element.id}
                                      setElements={setTabElements}
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
                                  </>
                                ))}
                              </>
                            ) : item.dropId === "tabsDroppableId2" ? (
                              <>
                                {tabElements2?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={tabElements2}
                                      element={element}
                                      key={element.id}
                                      setElements={setTabElements2}
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
                                  </>
                                ))}
                              </>
                            ) : item.dropId === "tabsDroppableId3" ? (
                              <>
                                {tabElements3?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={tabElements3}
                                      element={element}
                                      key={element.id}
                                      setElements={setTabElements3}
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
                                  </>
                                ))}
                              </>
                            ) : item.dropId === "tabsDroppableId4" ? (
                              <>
                                {tabElements4?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={tabElements4}
                                      element={element}
                                      key={element.id}
                                      setElements={setTabElements4}
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
                                  </>
                                ))}
                              </>
                            ) : item.dropId === "tabsDroppableId5" ? (
                              <>
                                {tabElements5?.map((element, index) => (
                                  <>
                                    <SingleElement
                                      show={show}
                                      index={index}
                                      elements={tabElements5}
                                      element={element}
                                      key={element.id}
                                      setElements={setTabElements5}
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
                                  </>
                                ))}
                              </>
                            ) : (
                              <></>
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </TabPanel>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h1>Not Valid Component</h1>
              </>
            )}
            {showDropdown ? (
              <div style={{ position: "relative" }}>
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
                  onClick={() => handleDelete(element.id!)}
                >
                  <AiFillDelete />
                </span>
              </div>
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
