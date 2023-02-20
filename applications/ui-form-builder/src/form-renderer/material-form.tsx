import React, { FormEvent, useState } from "react";
import {
  TextField,
  TextareaAutosize,
  Select,
  RadioGroup,
  Checkbox,
  Button,
  Tabs,
  TabContext,
  TabList,
  Box,
  TabPanel,
  TabList1,
} from "@power-form-builder/ui-components";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import { FormJson } from "../form-builder/ElementInterface";
import { useLocation } from "react-router-dom";

type TabItemsProps = {
  label: string;
  value: string;
}[];

function MaterialForm() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [formJsonData, setFormJsonData] = useState<FormJson>(formData);

  const [formDataValue, setFormDataValue] = useState({});

  //Final Select
  const [selectData, setSelectData] = useState({});

  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = React.useState("");

  const handleFormDataValueChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    setFormDataValue({
      ...formDataValue,
      [event.target.name]: event.target.value,
    });

    if (formDataValue) {
      console.log("No Error");
      setError(false);
      setHelperText("");
    } else if (event.target.name === "email") {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (regex.test(event.target.value)) {
        setEmailHelperText("");
      } else {
        setEmailHelperText("Not Valid Email");
        setError(true);
      }
    }
  };

  const handleSelectData = (event: any) => {
    const selectvalue = event.target.value;
    setSelectData(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
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

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", formDataValue);

    if (formDataValue) {
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

  //Tab
  const tabItems: TabItemsProps = [
    { label: "Tab1", value: "1" },
    { label: "Tab2", value: "2" },
    { label: "Tab3", value: "3" },
    { label: "Tab4", value: "4" },
    { label: "Tab5", value: "5" },
  ];

  const [value, setValue] = React.useState("1");
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {formJsonData.form_title !== "" ? (
        <form onSubmit={submitForm}>
          <>
            {console.log("Values....", formDataValue, selectData)}
            {/* {show && !error ? { formDataValue } : ""} */}
          </>
          {
            <GridItem xs={12} sm={12}>
              <h2>{formJsonData.form_title}</h2>
            </GridItem>
          }
          {formJsonData.components.map((data) => {
            console.log(formData);
            console.log(formJsonData);
            console.log("data", data);
            return (
              <>
                <Grid spacing={2} alignItems="center" justifyContent="center">
                  <GridItem sm={6}>
                    {data.element === "TextField" ? (
                      <TextField
                        label={data.label!}
                        name={data.label?.toLocaleLowerCase()}
                        onChange={handleFormDataValueChange}
                        placeholder={data.placeholder}
                        required={data.required!}
                        minLength={data.minLength!}
                        maxLength={data.maxLength!}
                      />
                    ) : data.element === "Email" ? (
                      <TextField
                        label={data.label!}
                        name={data.label?.toLocaleLowerCase()}
                        type="email"
                        onChange={handleFormDataValueChange}
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
                        onChange={handleFormDataValueChange}
                        placeholder={data.placeholder}
                        required={data.required!}
                        minLength={data.minLength!}
                        maxLength={data.maxLength!}
                      />
                    ) : data.element === "TextArea" ? (
                      <TextField
                        label={data.label!}
                        required={data.required!}
                        placeholder={data.placeholder!}
                        name={data.label?.toLocaleLowerCase()}
                        onChange={handleFormDataValueChange}
                        minLength={data.minLength!}
                        maxLength={data.maxLength!}
                        rows={data.rows}
                        multiline={true}
                      ></TextField>
                    ) : data.element === "Select" && !data.multipleValues ? (
                      <Select
                        label={data.label!}
                        placeholder={data.placeholder!}
                        menuItems={data.menuItems!}
                        multiple={data.multipleValues!}
                        name={data.label?.toLocaleLowerCase()}
                        onChange={handleFormDataValueChange}
                        size={
                          data.size !== undefined
                            ? data.size === "small"
                              ? "small"
                              : "medium"
                            : "medium"
                        }
                        required={data.required!}
                        width={data.width}
                      />
                    ) : data.element === "Select" && data.multipleValues ? (
                      <Select
                        label={data.label!}
                        placeholder={data.placeholder!}
                        menuItems={data.menuItems!}
                        multiple={data.multipleValues!}
                        name={data.label?.toLocaleLowerCase()}
                        onChange={handleSelectData}
                        size={
                          data.size !== undefined
                            ? data.size === "small"
                              ? "small"
                              : "medium"
                            : "medium"
                        }
                        required={data.required!}
                        width={data.width}
                      />
                    ) : data.element === "RadioButton" ? (
                      <RadioGroup
                        label={data.label!}
                        options={
                          data.options !== undefined
                            ? data.options === "top"
                              ? "top"
                              : data.options === "bottom"
                              ? "bottom"
                              : data.options === "start"
                              ? "start"
                              : "end"
                            : "end"
                        }
                        name={data.label?.toLocaleLowerCase()}
                        radioItems={data.radioItems!}
                        required={data.required!}
                        onChange={handleFormDataValueChange}
                      />
                    ) : data.element === "Checkbox" ? (
                      <Checkbox
                        label={data.label!}
                        name={data.label!}
                        required={data.required!}
                        defaultChecked={data.default}
                        onChange={handleChange}
                      />
                    ) : data.element === "Button" ? (
                      <Button
                        label={data.label!}
                        color={
                          data.theme !== undefined
                            ? data.theme === "primary"
                              ? "primary"
                              : data.theme === "secondary"
                              ? "secondary"
                              : data.theme === "info"
                              ? "info"
                              : data.theme === "success"
                              ? "success"
                              : data.theme === "warning"
                              ? "warning"
                              : data.theme === "error"
                              ? "error"
                              : "inherit"
                            : "warning"
                        }
                        size={
                          data.size !== undefined
                            ? data.size === "small"
                              ? "small"
                              : data.size === "medium"
                              ? "medium"
                              : "large"
                            : "medium"
                        }
                      />
                    ) : data.element === "Tabs" ? (
                      <>
                        <TabContext value={value}>
                          <Box>
                            <TabList1
                              onChange={handleTabChange}
                              tabItems={data.tabItems}
                            ></TabList1>
                          </Box>
                          {data.tabItems!.map((item, index) => (
                            <TabPanel value={tabItems.at(index)?.value!}>
                              {item.tabComponents!.map((item1, index1) => (
                                <>
                                  {item1.element === "TextField" ? (
                                    <GridItem>
                                      <TextField
                                        label={item1.label!}
                                        name={item1.label?.toLocaleLowerCase()}
                                        onChange={handleFormDataValueChange}
                                        placeholder={item1.placeholder}
                                        required={item1.required!}
                                        minLength={item1.minLength!}
                                        maxLength={item1.maxLength!}
                                      />
                                    </GridItem>
                                  ) : item1.element === "Password" ? (
                                    <GridItem>
                                      <TextField
                                        label={item1.label!}
                                        name={item1.label?.toLocaleLowerCase()}
                                        type="password"
                                        onChange={handleFormDataValueChange}
                                        placeholder={item1.placeholder}
                                        required={item1.required!}
                                        minLength={item1.minLength!}
                                        maxLength={item1.maxLength!}
                                      />
                                    </GridItem>
                                  ) : item1.element === "TextArea" ? (
                                    <GridItem>
                                      <TextField
                                        label={item1.label!}
                                        required={item1.required!}
                                        placeholder={item1.placeholder!}
                                        name={item1.label?.toLocaleLowerCase()}
                                        onChange={handleFormDataValueChange}
                                        minLength={item1.minLength!}
                                        maxLength={item1.maxLength!}
                                        rows={item1.rows}
                                        multiline={true}
                                      ></TextField>
                                    </GridItem>
                                  ) : item1.element === "Email" ? (
                                    <GridItem>
                                      <TextField
                                        label={item1.label!}
                                        name={item1.label?.toLocaleLowerCase()}
                                        type="email"
                                        onChange={handleFormDataValueChange}
                                        placeholder={item1.placeholder}
                                        required={item1.required!}
                                        minLength={item1.minLength!}
                                        maxLength={item1.maxLength!}
                                        helperText={emailHelperText}
                                        error={error}
                                      />
                                    </GridItem>
                                  ) : item1.element === "Select" &&
                                    !item1.multipleValues ? (
                                    <GridItem>
                                      <Select
                                        label={item1.label!}
                                        placeholder={item1.placeholder!}
                                        menuItems={item1.menuItems!}
                                        multiple={item1.multipleValues!}
                                        name={item1.label?.toLocaleLowerCase()}
                                        onChange={handleSelectData}
                                        size={
                                          item1.size !== undefined
                                            ? item1.size === "small"
                                              ? "small"
                                              : "medium"
                                            : "medium"
                                        }
                                        required={item1.required!}
                                        width={item1.width}
                                      />
                                    </GridItem>
                                  ) : item1.element === "RadioButton" ? (
                                    <GridItem>
                                      <RadioGroup
                                        label={item1.label!}
                                        options={
                                          item1.options !== undefined
                                            ? item1.options === "top"
                                              ? "top"
                                              : item1.options === "bottom"
                                              ? "bottom"
                                              : item1.options === "start"
                                              ? "start"
                                              : "end"
                                            : "end"
                                        }
                                        name={item1.label?.toLocaleLowerCase()}
                                        radioItems={item1.radioItems!}
                                        required={item1.required!}
                                        onChange={handleFormDataValueChange}
                                      />
                                    </GridItem>
                                  ) : item1.element === "Checkbox" ? (
                                    <GridItem>
                                      <Checkbox
                                        label={item1.label!}
                                        name={item1.label!}
                                        required={item1.required!}
                                        defaultChecked={item1.default}
                                        onChange={handleChange}
                                      />
                                    </GridItem>
                                  ) : item1.element === "Button" ? (
                                    <GridItem>
                                      <Button
                                        label={item1.label!}
                                        color={
                                          item1.theme !== undefined
                                            ? item1.theme === "primary"
                                              ? "primary"
                                              : item1.theme === "secondary"
                                              ? "secondary"
                                              : item1.theme === "info"
                                              ? "info"
                                              : item1.theme === "success"
                                              ? "success"
                                              : item1.theme === "warning"
                                              ? "warning"
                                              : item1.theme === "error"
                                              ? "error"
                                              : "inherit"
                                            : "warning"
                                        }
                                        size={
                                          item1.size !== undefined
                                            ? item1.size === "small"
                                              ? "small"
                                              : item1.size === "medium"
                                              ? "medium"
                                              : "large"
                                            : "medium"
                                        }
                                      />
                                    </GridItem>
                                  ) : (
                                    <>Noo</>
                                  )}
                                </>
                              ))}
                            </TabPanel>
                          ))}
                        </TabContext>
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
                          {item.label === "Column1" ? (
                            <GridItem md={4}>
                              <Grid>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          type="password"
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          required={item1.required!}
                                          placeholder={item1.placeholder!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleFormDataValueChange}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                          rows={item1.rows}
                                          multiline={true}
                                        ></TextField>
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          type="email"
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                          helperText={emailHelperText}
                                          error={error}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          label={item1.label!}
                                          placeholder={item1.placeholder!}
                                          menuItems={item1.menuItems!}
                                          multiple={item1.multipleValues!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleSelectData}
                                          size={
                                            item1.size !== undefined
                                              ? item1.size === "small"
                                                ? "small"
                                                : "medium"
                                              : "medium"
                                          }
                                          required={item1.required!}
                                          width={item1.width}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroup
                                          label={item1.label!}
                                          options={
                                            item1.options !== undefined
                                              ? item1.options === "top"
                                                ? "top"
                                                : item1.options === "bottom"
                                                ? "bottom"
                                                : item1.options === "start"
                                                ? "start"
                                                : "end"
                                              : "end"
                                          }
                                          name={item1.label?.toLocaleLowerCase()}
                                          radioItems={item1.radioItems!}
                                          required={item1.required!}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <Checkbox
                                          label={item1.label!}
                                          name={item1.label!}
                                          required={item1.required!}
                                          defaultChecked={item1.checked}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <Button
                                          label={item1.label!}
                                          color={
                                            item1.theme !== undefined
                                              ? item1.theme === "primary"
                                                ? "primary"
                                                : item1.theme === "secondary"
                                                ? "secondary"
                                                : item1.theme === "info"
                                                ? "info"
                                                : item1.theme === "success"
                                                ? "success"
                                                : item1.theme === "warning"
                                                ? "warning"
                                                : item1.theme === "error"
                                                ? "error"
                                                : "inherit"
                                              : "warning"
                                          }
                                          size={
                                            item1.size !== undefined
                                              ? item1.size === "small"
                                                ? "small"
                                                : item1.size === "medium"
                                                ? "medium"
                                                : "large"
                                              : "medium"
                                          }
                                        />
                                      </GridItem>
                                    ) : (
                                      <>Noo</>
                                    )}
                                  </>
                                ))}
                              </Grid>
                            </GridItem>
                          ) : (
                            <GridItem md={4}>
                              <Grid>
                                {item.columnComponents?.map((item1, index) => (
                                  <>
                                    {item1.element === "TextField" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Password" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          type="password"
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                        />
                                      </GridItem>
                                    ) : item1.element === "TextArea" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          required={item1.required!}
                                          placeholder={item1.placeholder!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleFormDataValueChange}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                          rows={item1.rows}
                                          multiline={true}
                                        ></TextField>
                                      </GridItem>
                                    ) : item1.element === "Email" ? (
                                      <GridItem>
                                        <TextField
                                          label={item1.label!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          type="email"
                                          onChange={handleFormDataValueChange}
                                          placeholder={item1.placeholder}
                                          required={item1.required!}
                                          minLength={item1.minLength!}
                                          maxLength={item1.maxLength!}
                                          helperText={emailHelperText}
                                          error={error}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Select" &&
                                      !item1.multipleValues ? (
                                      <GridItem>
                                        <Select
                                          label={item1.label!}
                                          placeholder={item1.placeholder!}
                                          menuItems={item1.menuItems!}
                                          multiple={item1.multipleValues!}
                                          name={item1.label?.toLocaleLowerCase()}
                                          onChange={handleSelectData}
                                          size={
                                            item1.size !== undefined
                                              ? item1.size === "small"
                                                ? "small"
                                                : "medium"
                                              : "medium"
                                          }
                                          required={item1.required!}
                                          width={item1.width}
                                        />
                                      </GridItem>
                                    ) : item1.element === "RadioButton" ? (
                                      <GridItem>
                                        <RadioGroup
                                          label={item1.label!}
                                          options={
                                            item1.options !== undefined
                                              ? item1.options === "top"
                                                ? "top"
                                                : item1.options === "bottom"
                                                ? "bottom"
                                                : item1.options === "start"
                                                ? "start"
                                                : "end"
                                              : "end"
                                          }
                                          name={item1.label?.toLocaleLowerCase()}
                                          radioItems={item1.radioItems!}
                                          required={item1.required!}
                                          onChange={handleFormDataValueChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Checkbox" ? (
                                      <GridItem>
                                        <Checkbox
                                          label={item1.label!}
                                          name={item1.label!}
                                          required={item1.required!}
                                          defaultChecked={item1.checked}
                                          onChange={handleChange}
                                        />
                                      </GridItem>
                                    ) : item1.element === "Button" ? (
                                      <GridItem>
                                        <Button
                                          label={item1.label!}
                                          color={
                                            item1.theme !== undefined
                                              ? item1.theme === "primary"
                                                ? "primary"
                                                : item1.theme === "secondary"
                                                ? "secondary"
                                                : item1.theme === "info"
                                                ? "info"
                                                : item1.theme === "success"
                                                ? "success"
                                                : item1.theme === "warning"
                                                ? "warning"
                                                : item1.theme === "error"
                                                ? "error"
                                                : "inherit"
                                              : "warning"
                                          }
                                          size={
                                            item1.size !== undefined
                                              ? item1.size === "small"
                                                ? "small"
                                                : item1.size === "medium"
                                                ? "medium"
                                                : "large"
                                              : "medium"
                                          }
                                        />
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
                      {/* <GridItem md={6}>
                          <>Column1</>
                        </GridItem>
                        <GridItem md={6}>
                          <>Column2</>
                        </GridItem> */}
                    </Grid>
                  </>
                ) : (
                  ""
                )}
              </>
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
