import React, { FormEvent, useState } from "react";
import {
  Button,
  Box,
  TabPanel,
  FileUpload,
  Tabs1,
} from "@power-form-builder/ui-components";
import dayjs, { Dayjs } from "dayjs";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import { FormJson } from "../form-builder/ElementInterface";
import { useLocation, useNavigate } from "react-router-dom";
import TextFieldRender from "./TextFieldRender";
import EmailRender from "./EmailRender";
import PasswordRender from "./PasswordRender";
import TextAreaRender from "./TextAreaRender";
import SelectRender from "./SelectRender";
import RadioGroupRender from "./RadioGroupRender";
import ButtonRender from "./ButtonRender";
import CheckboxRender from "./CheckboxRender";
import DatePickerRender from "./DatePickerRender";
import FileUploadRender from "./FileUploadRender";

type TabItemsProps = {
  label: string;
  value: string;
}[];

function MaterialForm() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [formJsonData] = useState<FormJson>(formData);

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
                      <TextFieldRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Email" ? (
                      <EmailRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Password" ? (
                      <PasswordRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "TextArea" ? (
                      <TextAreaRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Select" && !data.multipleValues ? (
                      <SelectRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Select" && data.multipleValues ? (
                      <SelectRender data={data} onChange={handleSelectData} />
                    ) : data.element === "RadioButton" ? (
                      <RadioGroupRender
                        data={data}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Checkbox" ? (
                      <CheckboxRender data={data} onChange={handleChange} />
                    ) : data.element === "Button" ? (
                      <ButtonRender data={data} />
                    ) : data.element === "DatePicker" ? (
                      <GridItem>
                        <DatePickerRender
                          data={data}
                          onChange={handleDatePickerChange}
                        />
                      </GridItem>
                    ) : data.element === "FileUpload" ? (
                      <GridItem>
                        <FileUploadRender />
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
                                    <TextFieldRender
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Password" ? (
                                  <GridItem>
                                    <PasswordRender
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "TextArea" ? (
                                  <GridItem>
                                    <TextAreaRender
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Email" ? (
                                  <GridItem>
                                    <EmailRender
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Select" &&
                                  !item1.multipleValues ? (
                                  <SelectRender
                                    data={item1}
                                    onChange={handleFormDataValueChange}
                                  />
                                ) : item1.element === "Select" &&
                                  item1.multipleValues ? (
                                  <SelectRender
                                    data={data}
                                    onChange={handleSelectData}
                                  />
                                ) : item1.element === "RadioButton" ? (
                                  <GridItem>
                                    <RadioGroupRender
                                      data={item1}
                                      onChange={handleFormDataValueChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Checkbox" ? (
                                  <GridItem>
                                    <CheckboxRender
                                      data={item1}
                                      onChange={handleChange}
                                    />
                                  </GridItem>
                                ) : item1.element === "Button" ? (
                                  <GridItem>
                                    <ButtonRender data={item1} />
                                  </GridItem>
                                ) : item1.element === "DatePicker" ? (
                                  <GridItem>
                                    <DatePickerRender
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
                                        <TextFieldRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <PasswordRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextAreaRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <EmailRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <SelectRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <GridItem>
                                        <SelectRender
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroupRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <CheckboxRender
                                          data={item1}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <ButtonRender data={item1} />
                                      </GridItem>
                                    ) : item1.element === "DatePicker" ? (
                                      <GridItem>
                                        <DatePickerRender
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
                                        <TextFieldRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <PasswordRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextAreaRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <EmailRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <SelectRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      item1.multipleValues ? (
                                      <GridItem>
                                        <SelectRender
                                          data={data}
                                          onChange={handleSelectData}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroupRender
                                          data={item1}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <CheckboxRender
                                          data={item1}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <ButtonRender data={item1} />
                                      </GridItem>
                                    ) : item1.element === "DatePicker" ? (
                                      <GridItem>
                                        <DatePickerRender
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
              <Button color={"success"} size={"medium"}>
                Submit
              </Button>
            </GridItem>
          </Grid>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default MaterialForm;
