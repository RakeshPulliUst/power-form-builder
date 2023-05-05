import { RenderEngineOptions } from "../index.types";
import React, { FormEvent, useState } from "react";
import {
  Button as BaseButton,
  Box,
  TabPanel,
  FileUpload as BaseFileUpload,
  Tabs1,
} from "@power-form-builder/ui-components";
import dayjs, { Dayjs } from "dayjs";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import { FormJson } from "../../form-builder/ElementInterface";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "../components/templates/material/TextField";
import Email from "../components/templates/material/Email";
import Password from "../components/templates/material/Password";
import TextArea from "../components/templates/material/TextArea";
import Select from "../components/templates/material/Select";
import RadioGroup from "../components/templates/material/RadioGroup";
import Button from "../components/templates/material/Button";
import Checkbox from "../components/templates/material/Checkbox";
import DatePicker from "../components/templates/material/DatePicker";
import FileUpload from "../components/templates/material/FileUpload";

type TabItemsProps = {
  label: string;
  value: string;
}[];

const MaterialEngine = ({ builderJSON, submission }: RenderEngineOptions) => {
  const location = useLocation();
  const { formData } = location.state || {};
  const [formJsonData] = useState<FormJson>(builderJSON);

  const [formDataValue, setFormDataValue] = useState({});

  const navigate = useNavigate();
  //Final Select
  const [selectData, setSelectData] = useState({});

  const [datePickerValue, setDatePickerValue] = useState<Dayjs | null>();
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checkbox");
    // setChecked({ ...checked, [event.target.name]: event.target.checked });
    setFormDataValue({
      ...formDataValue,
      [event.target.name]: event.target.checked,
    });
    console.log("Checkbox ValuesL", formDataValue);
  };

  const handleDatePickerChange = (newValue: dayjs.Dayjs) => {
    setDatePickerValue(newValue);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", formDataValue, selectData, datePickerValue?.toDate());
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
              datePickerValue?.toDate()
            )}
            {/* {show && !error ? { formDataValue } : ""} */}
          </>
          {
            <Grid>
              <GridItem md={8}>
                <h2>{formJsonData.form_title}</h2>
              </GridItem>
            </Grid>
          }
          {formJsonData.components.map((data) => {
            console.log(formData);
            console.log(formJsonData);
            console.log("data", data);
            if (data.validate) {
              console.log("Validate", data.validate);
            } else {
              console.log("No");
            }
            return (
              <>
                <Grid spacing={2} alignItems="center" justifyContent="center">
                  <GridItem>
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
                      <Checkbox data={data} onChange={handleChange} />
                    ) : data.element === "Button" ? (
                      <Button data={data} />
                    ) : data.element === "DatePicker" ? (
                      <GridItem>
                        <DatePicker
                          data={data}
                          onChange={handleDatePickerChange}
                        />
                      </GridItem>
                    ) : data.element === "FileUpload" ? (
                      <GridItem>
                        <FileUpload />
                      </GridItem>
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
                                  <GridItem>
                                    <TextField
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Password" ? (
                                  <GridItem>
                                    <Password
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "TextArea" ? (
                                  <GridItem>
                                    <TextArea
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Email" ? (
                                  <GridItem>
                                    <Email
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Select" &&
                                  !item1.multipleValues ? (
                                  <Select
                                    data={item1}
                                    onChange={handleFormDataValueChange}
                                  />
                                ) : item1.element === "Select" &&
                                  item1.multipleValues ? (
                                  <Select
                                    data={data}
                                    onChange={handleSelectData}
                                  />
                                ) : item1.element === "RadioButton" ? (
                                  <GridItem>
                                    <RadioGroup
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Checkbox" ? (
                                  <GridItem>
                                    <Checkbox
                                      data={item1}
                                      onChange={handleChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Button" ? (
                                  <GridItem>
                                    <Button data={item1} />
                                  </GridItem>
                                ) : item1.element === "DatePicker" ? (
                                  <GridItem>
                                    <DatePicker
                                      data={item1}
                                      onChange={handleDatePickerChange}
                                    />
                                  </GridItem>
                                ) : data.element === "FileUpload" ? (
                                  <GridItem>
                                    <FileUpload />
                                  </GridItem>
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
                  </GridItem>
                </Grid>
                {data.element === "Column" ? (
                  <>
                    <Grid alignItems="center" justifyContent="center">
                      {data.columnItems?.map((item, index) => (
                        <>
                          {console.log(item)}
                          {item.label === "Column1" ? (
                            <GridItem xs={4}>
                              <Grid>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <GridItem>
                                        <TextField
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <Password
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextArea
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <Email
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroup
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <Checkbox
                                          data={item1}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <Button data={item1} />
                                      </GridItem>
                                    ) : item1.element === "DatePicker" ? (
                                      <GridItem>
                                        <DatePicker
                                          data={item1}
                                          onChange={handleDatePickerChange}
                                        />
                                      </GridItem>
                                    ) : data.element === "FileUpload" ? (
                                      <GridItem>
                                        <FileUpload />
                                      </GridItem>
                                    ) : (
                                      <>Noo</>
                                    )}
                                  </>
                                ))}
                              </Grid>
                            </GridItem>
                          ) : (
                            <GridItem xs={4}>
                              <Grid>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <GridItem>
                                        <TextField
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <Password
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextArea
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <Email
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroup
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <Checkbox
                                          data={item1}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <Button data={item1} />
                                      </GridItem>
                                    ) : item1.element === "DatePicker" ? (
                                      <GridItem>
                                        <DatePicker
                                          data={item1}
                                          onChange={handleDatePickerChange}
                                        />
                                      </GridItem>
                                    ) : data.element === "FileUpload" ? (
                                      <GridItem>
                                        <FileUpload />
                                      </GridItem>
                                    ) : (
                                      <>Noo</>
                                    )}
                                  </>
                                ))}
                              </Grid>
                            </GridItem>
                          )}
                        </>
                      ))}
                    </Grid>
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
          <Grid alignItems="center" justifyContent="center">
            <GridItem>
              <BaseButton color={"success"} size={"medium"}>
                Submit
              </BaseButton>
            </GridItem>
          </Grid>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default MaterialEngine;
