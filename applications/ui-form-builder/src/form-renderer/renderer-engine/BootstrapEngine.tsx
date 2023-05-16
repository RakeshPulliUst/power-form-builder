import { RenderEngineOptions } from "../index.types";
import React, { FormEvent, useState } from "react";
import {
  BButton as BaseButton,
  Box,
  TabPanel,
  FileUpload as BaseFileUpload,
  Tabs1,
  BRow,
  BCol,
} from "@power-form-builder/ui-components";
import dayjs, { Dayjs } from "dayjs";
import { FormJson } from "../../form-builder/ElementInterface";
import { useNavigate } from "react-router-dom";

import Button from "../components/templates/bootstrap/Button";
import Checkbox from "../components/templates/bootstrap/Checkbox";
import TextField from "../components/templates/bootstrap/TextField";
import Email from "../components/templates/bootstrap/Email";
import Password from "../components/templates/bootstrap/Password";
import RadioGroup from "../components/templates/bootstrap/RadioGroup";
import Select from "../components/templates/bootstrap/Select";
import TextArea from "../components/templates/bootstrap/TextArea";
import DatePicker from "../components/templates/bootstrap/DatePicker";
import FileUpload from "../components/templates/bootstrap/FileUpload";

type TabItemsProps = {
  label: string;
  value: string;
}[];

const BootstrapEngine = ({ builderJSON, submission }: RenderEngineOptions) => {
  const [formJsonData] = useState<FormJson>(builderJSON);

  const [formDataValue, setFormDataValue] = useState({});

  const navigate = useNavigate();
  //Final Select
  const [selectData, setSelectData] = useState({});

  const [datePickerValue, setDatePickerValue] = useState<Date | null>();
  // const [error, setError] = React.useState(false);

  const handleFormDataValueChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    setFormDataValue({
      ...formDataValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectData = (event: any) => {
    const selectvalue = event.target.value;
    const finalValue =
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue;
    setSelectData({ ...selectData, [event.target.name]: finalValue });
    console.log("Select Value", selectvalue);
  };

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("Checkbox");
    // // setChecked({ ...checked, [event.target.name]: event.target.checked });
    // setFormDataValue({
    //   ...formDataValue,
    //   [event.target.name]: event.target.checked,
    // });
    // console.log("Checkbox ValuesL", formDataValue);
  };

  const handleDatePickerChange = (newValue: Date) => {
    setDatePickerValue(newValue);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", formDataValue, selectData, datePickerValue);
    console.log(Object.keys(formDataValue).length);
    if (Object.keys(formDataValue).length > 0) {
      console.log("Submit Data");
      alert("Done");
      navigate("/home");
    } else {
      console.log("Submit Data Error");
      alert("Enter Values");
    }
    //window.location.reload();
  };

  //Tab
  const tabItems: TabItemsProps = [
    { label: "Tab1", value: "1" },
    { label: "Tab2", value: "2" },
    { label: "Tab3", value: "3" },
    { label: "Tab4", value: "4" },
    { label: "Tab5", value: "5" },
  ];

  const [value, setValue] = React.useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const resetValues = () => {
    setFormDataValue({});
    setSelectData({});
  };

  return (
    <>
      {formJsonData.form_title !== "" ? (
        <form onSubmit={submitForm}>
          <>
            {console.log(
              "Values....",
              formDataValue,
              selectData,
              datePickerValue
            )}
            {/* {show && !error ? { formDataValue } : ""} */}
          </>
          {
            <BRow>
              <BCol md={8}>{formJsonData.form_title}</BCol>
            </BRow>
          }
          {formJsonData.components.map((data) => {
            console.log(formJsonData);
            console.log("data", data);
            if (data.validate) {
              console.log("Validate", data.validate);
            } else {
              console.log("No");
            }
            return (
              <>
                <BRow
                  className="justify-content-center align-items-center"
                  xs={2}
                >
                  <BCol className="mb-4">
                    {data.element === "TextField" ? (
                      <TextField
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Email" ? (
                      <Email data={data} onChange={handleFormDataValueChange} />
                    ) : data.element === "Password" ? (
                      <Password
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "TextArea" ? (
                      <TextArea
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Select" && !data.multipleValues ? (
                      <Select
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Select" && data.multipleValues ? (
                      <Select data={data} onChange={handleSelectData} />
                    ) : data.element === "RadioButton" ? (
                      <RadioGroup
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Checkbox" ? (
                      <Checkbox
                        data={data}
                        checked={checkboxValue}
                        onChange={handleCheckboxChange}
                      />
                    ) : data.element === "Button" ? (
                      <Button data={data} />
                    ) : data.element === "DatePicker" ? (
                      <DatePicker
                        data={data}
                        selected={datePickerValue}
                        onChange={handleDatePickerChange}
                      />
                    ) : data.element === "FileUpload" ? (
                      <FileUpload />
                    ) : data.element === "Tabs" ? (
                      <>
                        <Box>
                          <Tabs1
                            onChange={handleTabChange}
                            tabItems={data.tabItems}
                            value={value}
                          ></Tabs1>
                        </Box>
                        {data.tabItems!.map((item, index) => (
                          <TabPanel value={value} index={index}>
                            {item.tabComponents!.map((item1, index1) => (
                              <>
                                {item1.element === "TextField" ? (
                                  <BCol className="mb-4">
                                    <TextField
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Password" ? (
                                  <BCol className="mb-4">
                                    <Password
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "TextArea" ? (
                                  <BCol className="mb-4">
                                    <TextArea
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Email" ? (
                                  <BCol className="mb-4">
                                    <Email
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Select" &&
                                  !item1.multipleValues ? (
                                  <BCol className="mb-4">
                                    <Select
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Select" &&
                                  item1.multipleValues ? (
                                  <BCol className="mb-4">
                                    <Select
                                      data={data}
                                      onChange={handleSelectData}
                                    />
                                  </BCol>
                                ) : item1.element === "RadioButton" ? (
                                  <BCol className="mb-4">
                                    <RadioGroup
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Checkbox" ? (
                                  <BCol className="mb-4">
                                    <Checkbox
                                      data={item1}
                                      checked={checkboxValue}
                                      onChange={handleCheckboxChange}
                                    />
                                  </BCol>
                                ) : item1.element === "Button" ? (
                                  <BCol className="mb-4">
                                    <Button data={item1} />
                                  </BCol>
                                ) : item1.element === "DatePicker" ? (
                                  <BCol className="mb-4">
                                    {/* <DatePicker
                                      data={item1}
                                      onChange={handleDatePickerChange}
                                    /> */}
                                  </BCol>
                                ) : data.element === "FileUpload" ? (
                                  <BCol className="mb-4">
                                    <FileUpload />
                                  </BCol>
                                ) : (
                                  <>Noo</>
                                )}
                              </>
                            ))}
                          </TabPanel>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </BCol>
                </BRow>
                {data.element === "Column" ? (
                  <>
                    <BRow
                      className="justify-content-center align-items-center"
                      xs={2}
                    >
                      {data.columnItems?.map((item, index) => (
                        <>
                          {console.log(item)}
                          {item.label === "Column1" ? (
                            <BCol className="mb-4">
                              <BRow>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <BCol className="mb-4">
                                        <TextField
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Password" ? (
                                      <BCol className="mb-4">
                                        <Password
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "TextArea" ? (
                                      <BCol className="mb-4">
                                        <TextArea
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Email" ? (
                                      <BCol className="mb-4">
                                        <Email
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <BCol className="mb-4">
                                        <Select
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <BCol className="mb-4">
                                        <Select
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </BCol>
                                    ) : item1.element === "RadioButton" ? (
                                      <BCol className="mb-4">
                                        <RadioGroup
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Checkbox" ? (
                                      <BCol className="mb-4">
                                        <Checkbox
                                          data={item1}
                                          checked={checkboxValue}
                                          onChange={handleCheckboxChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Button" ? (
                                      <BCol className="mb-4">
                                        <Button data={item1} />
                                      </BCol>
                                    ) : item1.element === "DatePicker" ? (
                                      <BCol className="mb-4">
                                        {/* <DatePicker
                                          data={item1}
                                          onChange={handleDatePickerChange}
                                        /> */}
                                      </BCol>
                                    ) : data.element === "FileUpload" ? (
                                      <BCol className="mb-4">
                                        <FileUpload />
                                      </BCol>
                                    ) : (
                                      <>Noo</>
                                    )}
                                  </>
                                ))}
                              </BRow>
                            </BCol>
                          ) : (
                            <BCol className="mb-4">
                              <BRow>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <BCol className="mb-4">
                                        <TextField
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Password" ? (
                                      <BCol className="mb-4">
                                        <Password
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "TextArea" ? (
                                      <BCol className="mb-4">
                                        <TextArea
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Email" ? (
                                      <BCol className="mb-4">
                                        <Email
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <BCol className="mb-4">
                                        <Select
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <BCol className="mb-4">
                                        <Select
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </BCol>
                                    ) : item1.element === "RadioButton" ? (
                                      <BCol className="mb-4">
                                        <RadioGroup
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Checkbox" ? (
                                      <BCol className="mb-4">
                                        <Checkbox
                                          data={item1}
                                          checked={checkboxValue}
                                          onChange={handleCheckboxChange}
                                        />
                                      </BCol>
                                    ) : item1.element === "Button" ? (
                                      <BCol className="mb-4">
                                        <Button data={item1} />
                                      </BCol>
                                    ) : item1.element === "DatePicker" ? (
                                      <BCol className="mb-4">
                                        {/* <DatePicker
                                          data={item1}
                                          onChange={handleDatePickerChange}
                                        /> */}
                                      </BCol>
                                    ) : data.element === "FileUpload" ? (
                                      <BCol className="mb-4">
                                        <FileUpload />
                                      </BCol>
                                    ) : (
                                      <>Noo</>
                                    )}
                                  </>
                                ))}
                              </BRow>
                            </BCol>
                          )}
                        </>
                      ))}
                    </BRow>
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
          <BRow className="justify-content-center align-items-center" xs={2}>
            <BCol>
              <BaseButton variant={"success"} size="lg">
                Submit
              </BaseButton>
            </BCol>
          </BRow>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default BootstrapEngine;
