import React, { FormEvent, useState } from "react";
import {
  TextField,
  MuiTextArea,
  MuiSelect,
  MuiRadioButton,
  MuiCheckBox,
  MuiButton,
} from "@power-form-builder/ui-components";
import MuiGrid from "@material-ui/core/Grid";
import { MuiGridItem } from "@power-form-builder/ui-components";
import { FormJson } from "../form-builder/ElementInterface";
import { useLocation } from "react-router-dom";

function MaterialForm() {
  const location = useLocation();
  const { formData1 } = location.state || {};
  const [formJsonData, setFormJsonData] = useState<FormJson>(formData1);

  const [val, setVal] = React.useState({
    firstname: "",
    email: "",
    password: "",
    address: "",
    country: "",
    gender: "",
  });

  //Final Select
  const [selectData, setSelectData] = useState<string[]>([]);

  const handleSelectData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectvalue = event.target.value;
    setSelectData(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log("Select Value", selectvalue);
  };

  const [checkbox, setCheckbox] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = React.useState("");

  const onHandleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
    console.log("e.target.value", e.target.value);

    if (
      val.firstname !== "" &&
      val.email !== "" &&
      val.password !== "" &&
      val.address !== "" &&
      val.country !== "" &&
      val.gender !== ""
    ) {
      console.log("No Error");
      setError(false);
      setHelperText("");
    } else if (e.target.name === "email") {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (regex.test(e.target.value)) {
        setEmailHelperText("");
      } else {
        setEmailHelperText("Not Valid Email");
        setError(true);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checkbox");
    setChecked(event.target.checked);
    setCheckbox(event.target.value);
    console.log("Checkbox ValuesL", checkbox, checked);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", val, "checkbox", checkbox);
    var regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (
      val.firstname !== "" ||
      (val.email !== "" && regex1.test(val.email)) ||
      val.password !== "" ||
      val.country !== "" ||
      val.address !== "" ||
      val.gender !== "" ||
      checkbox !== "" ||
      selectData.length !== 0
    ) {
      console.log("Submit Data");
      setError(false);
      setHelperText("");
      setShow(true);
    } else {
      console.log("Submit Data");
      setError(true);
      setHelperText("required");
    }
  };
  const resetBtn = () => {
    setVal({
      firstname: "",
      email: "",
      password: "",
      address: "",
      country: "",
      gender: "",
    });
  };
  return (
    <>
      {formJsonData.title !== "" ? (
        <form onSubmit={submitForm}>
          <>
            {console.log(
              "values.....",
              val,
              "Error",
              error,
              "Multiple ",
              selectData,
              "Checkbox",
              checkbox,
              "checked",
              checked
            )}
            {show && !error ? (
              <ul style={{ listStyle: "none" }}>
                <li>Name:{val.firstname}</li>
                <li>Email:{val.email}</li>
                <li>Password:{val.password}</li>
                <li>Address:{val.address}</li>
                <li>Country:{val.country}</li>
                <li>Gender:{val.gender}</li>
                <li>CheckBox:{checkbox}</li>
                <li>Multiple Select: {selectData}</li>
              </ul>
            ) : (
              ""
            )}
          </>
          {
            <MuiGridItem xs={12} sm={12}>
              <h2>{formJsonData.title}</h2>
            </MuiGridItem>
          }
          {formJsonData.components.map((data) => {
            console.log("data", data);
            return (
              <MuiGrid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <MuiGridItem xs={12} sm={6}>
                  {data.element === "TextField" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.firstname}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                    />
                  ) : data.element === "Email" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.email}
                      type="email"
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                      helperText={emailHelperText}
                      error={error}
                    />
                  ) : data.element === "Password" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      type="password"
                      value={val.password}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                    />
                  ) : data.element === "TextArea" ? (
                    <MuiTextArea
                      label={data.label!}
                      required={data.required!}
                      placeholder={data.placeholder!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.address}
                      onChange={onHandleChange}
                      minRows={parseInt(data.minRows!)}
                      width={parseInt(data.width!)}
                    ></MuiTextArea>
                  ) : data.element === "Select" && !data.multipleValues ? (
                    <MuiSelect
                      label={data.label!}
                      placeholder={data.placeholder!}
                      menuItems={data.menuItems!}
                      multiple={data.multipleValues!}
                      name={data.label?.toLocaleLowerCase()}
                      values={val.country}
                      onChange={onHandleChange}
                      size={
                        data.size !== undefined
                          ? data.size.pop() === "small"
                            ? "small"
                            : "medium"
                          : "medium"
                      }
                      required={data.required!}
                      textFieldWidth={data.textFieldWidth}
                    />
                  ) : data.element === "Select" && data.multipleValues ? (
                    <MuiSelect
                      label={data.label!}
                      placeholder={data.placeholder!}
                      menuItems={data.menuItems!}
                      multiple={data.multipleValues!}
                      name={data.label?.toLocaleLowerCase()}
                      values={selectData}
                      onChange={handleSelectData}
                      size={
                        data.size !== undefined
                          ? data.size.pop() === "small"
                            ? "small"
                            : "medium"
                          : "medium"
                      }
                      required={data.required!}
                      textFieldWidth={data.textFieldWidth}
                    />
                  ) : data.element === "RadioButton" ? (
                    <MuiRadioButton
                      label={data.label!}
                      options={
                        data.options !== undefined
                          ? data.options.pop() === "top"
                            ? "top"
                            : data.options.pop() === "bottom"
                            ? "bottom"
                            : data.options.pop() === "start"
                            ? "start"
                            : "end"
                          : "end"
                      }
                      value={val.gender}
                      name={data.label?.toLocaleLowerCase()}
                      radioItems={data.radioItems!}
                      required={data.required!}
                      onChange={onHandleChange}
                    />
                  ) : data.element === "CheckBox" ? (
                    <MuiCheckBox
                      label={data.label!}
                      name={data.label!}
                      required={data.required!}
                      value={data.label}
                      checked={checked}
                      onChange={handleChange}
                    />
                  ) : data.element === "Button" ? (
                    <MuiButton
                      label={data.label!}
                      color={
                        data.theme !== undefined
                          ? data.theme.pop() === "primary"
                            ? "primary"
                            : data.theme.pop() === "secondary"
                            ? "secondary"
                            : data.theme.pop() === "info"
                            ? "info"
                            : data.theme.pop() === "success"
                            ? "success"
                            : data.theme.pop() === "warning"
                            ? "warning"
                            : data.theme.pop() === "error"
                            ? "error"
                            : "inherit"
                          : "primary"
                      }
                      size={
                        data.size !== undefined
                          ? data.size.pop() === "small"
                            ? "small"
                            : data.size.pop() === "medium"
                            ? "medium"
                            : "large"
                          : "medium"
                      }
                    />
                  ) : (
                    ""
                  )}
                </MuiGridItem>
              </MuiGrid>
            );
          })}
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default MaterialForm;
