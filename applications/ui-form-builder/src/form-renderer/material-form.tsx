import React, { FormEvent, useState } from "react";
import {
  MuiTextField,
  MuiTextArea,
  MuiSelect,
  MuiRadioButton,
  MuiCheckBox,
  MuiButton,
} from "@power-form-builder/ui-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { sample } from "../form-builder/ElementInterface";
import { FormJson } from "../form-builder/ElementInterface";
import { useLocation } from "react-router-dom";

// const data = {
//   title: "",
//   components: [
//     {
//       name: "firstname",
//       label: "FirstName",
//       maxLength: "11",
//       minLength: "1",
//       placeholder: "Enter FirstName",
//       html_element: "TextField",
//       data_type: "String",
//       required: true,
//     },
//     {
//       name: "email",
//       label: "Email",
//       maxLength: "40",
//       minLength: "10",
//       placeholder: "Enter Email",
//       html_element: "Email",
//       data_type: "email",
//       required: true,
//     },
//     {
//       name: "password",
//       label: "Password",
//       maxLength: "12",
//       minLength: "6",
//       placeholder: "Enter Password",
//       html_element: "Password",
//       data_type: "password",
//       required: true,
//     },
//     {
//       name: "address",
//       label: "Address",
//       minRows: "3",
//       placeholder: "Enter Address",
//       html_element: "TextArea",
//       width: "100",
//       required: true,
//     },
//     {
//       name: "country",
//       label: "Country",
//       required: true,
//       placeholder: "Choose Country",
//       textFieldWidth: 220,
//       multipleValues: false,
//       size: ["medium"],
//       menuItems: [
//         {
//           selectDataLabel: "India",
//           selectDataValue: "india",
//         },
//         {
//           selectDataLabel: "Canada",
//           selectDataValue: "canada",
//         },
//         {
//           selectDataLabel: "England",
//           selectDataValue: "england",
//         },
//       ],
//       html_element: "Select",
//     },
//     {
//       name: "gender",
//       label: "Choose Gender",
//       required: true,
//       options: ["start"],
//       html_element: "RadioButton",
//       radioItems: [
//         {
//           radioButtonDataLabel: "Male",
//           radioButtonDataValue: "Male",
//         },
//         {
//           radioButtonDataLabel: "Female",
//           radioButtonDataValue: "Female",
//         },
//       ],
//     },
//     {
//       name: "checkbox1",
//       label: "AcceptTerms",
//       value: "accept",
//       required: false,
//       default: false,
//       error: "Invalid",
//       html_element: "CheckBox",
//     },
//     {
//       name: "checkbox2",
//       label: "RejectTerms",
//       value: "reject",
//       required: false,
//       default: false,
//       error: "Invalid",
//       html_element: "CheckBox",
//     },
//     {
//       name: "button",
//       label: "hello",
//       theme: ["secondary"],
//       size: ["medium"],
//       html_element: "Button",
//     },
//   ],
// };

// const MaterialForm: React.FC<{
//   formJsonData: FormJson;
// }> = ({ formJsonData }) => {
// const [formData, setFormData] = useState<FormJson>(sample);
function MaterialForm() {
  const location = useLocation();
  const { formData1 } = location.state;
  const [formJsonData, setFormJsonData] = useState<FormJson>(formData1);

  const [val, setVal] = React.useState({
    firstname: "",
    email: "",
    password: "",
    address: "",
    country: "",
    gender: "",
  });
  const [checkbox, setCheckbox] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onHandleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log("e.target.value", e.target.value);
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
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
      }
    }
  };

  const likeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checkboxxxxxxx");
    setCheckbox(e.target.value);
    setChecked(e.target.checked);
    console.log(checkbox);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", val, "checkbox", checkbox);
    if (
      val.firstname !== "" ||
      val.email !== "" ||
      val.password !== "" ||
      val.country !== "" ||
      val.address !== "" ||
      val.gender !== ""
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
            {console.log("values.....", val, error, checkbox)}
            {show ? (
              <ul style={{ listStyle: "none" }}>
                <li>Name:{val.firstname}</li>
                <li>Email:{val.email}</li>
                <li>Password:{val.password}</li>
                <li>Address:{val.address}</li>
                <li>Country:{val.country}</li>
                <li>Gender:{val.gender}</li>
                <li>CheckBox:{checkbox}</li>
              </ul>
            ) : (
              ""
            )}
          </>
          {
            <Grid item xs={12} sm={12}>
              {" "}
              <h2>{formJsonData.title}</h2>
            </Grid>
          }
          {formJsonData.components.map((data) => {
            console.log("data", data);
            return (
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={6}>
                  {data.element === "TextField" ? (
                    <MuiTextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      // type={data.data_type === "Integer" ? "number" : "String"}
                      //
                      value={val.firstname}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={parseInt(data.minLength!)}
                      maxLength={parseInt(data.maxLength!)}
                    />
                  ) : data.element === "Email" ? (
                    <MuiTextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.email}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={parseInt(data.minLength!)}
                      maxLength={parseInt(data.maxLength!)}
                      helperText={emailHelperText}
                    />
                  ) : data.element === "Password" ? (
                    <MuiTextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      type="password"
                      value={val.password}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={parseInt(data.minLength!)}
                      maxLength={parseInt(data.maxLength!)}
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
                  ) : data.element === "Select" ? (
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
                      defaultChecked={data.default!}
                      value={data.label}
                      checked={checked}
                      onChange={likeEvent}
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
                </Grid>
              </Grid>
            );
          })}

          {/* <Button type="submit" variant="contained" color="primary">
        Submit
      </Button> */}
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default MaterialForm;
