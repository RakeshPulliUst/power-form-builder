import React, { useEffect, useState } from "react";

import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TabContext,
  TabPanel,
  TabList,
} from "@power-form-builder/ui-components";
import { TabsDialog } from "../DialogInterface";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Element } from "../ElementInterface";

type Props = {
  id: string;
  tabsDataLabel: string;
  tabsDataValue: string;
  tabComponents: Element[];
}[];

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

const TabsData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  tabValues: TabsDialog;
  element: Element;
}> = ({ open, handleClose, tabValues, handleOpen, element }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //Tabs
  const [tabsLabel, setTabsLabel] = useState("");
  const [tabItemsData, setTabItemsData] = useState<Props>([
    {
      id: uuidv4(),
      tabsDataLabel: "",
      tabsDataValue: "",
      tabComponents: [
        {
          id: 101,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
  ]);

  const handleTabsLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabsLabel(event.target.value);
  };

  const handleData = () => {
    tabValues.label = tabsLabel;
    tabValues.tabItems = tabItemsData;
    console.log(tabValues);
    handleOpen();
  };

  useEffect(() => {
    setTabsLabel(element.label!);
    setTabItemsData(element.tabItems!);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("InputFields", tabItemsData);
  };

  const handleChangeInput = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = tabItemsData.map((i) => {
      if (id === i.id) {
        console.log("aaa", event.target.name, "bb", event.target.value);
        {
          event.target.name === "tabsDataLabel"
            ? (i["tabsDataLabel"] = event.target.value)
            : (i["tabsDataValue"] = event.target.value);
        }
      }
      return i;
    });

    setTabItemsData(newInputFields);
  };

  const handleAddFields = () => {
    setTabItemsData([
      ...tabItemsData,
      {
        id: uuidv4(),
        tabsDataLabel: "",
        tabsDataValue: "",
        tabComponents: [
          {
            id: 0,
            element: "",
            label: "",
          },
        ],
      },
    ]);
    console.log(tabItemsData);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...tabItemsData];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setTabItemsData(values);
  };

  const tabItems: TabItemsProps = [
    { label: "Display", value: "1" },
    { label: "Data", value: "2" },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="Tabs Details" />
      <DialogContent>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} tabItems={tabItems}></TabList>
          </Box>
          <TabPanel value="1">
            <TextField
              label="Label"
              required={true}
              value={tabsLabel}
              onChange={handleTabsLabel}
            />
          </TabPanel>
          <TabPanel value="2">
            <form onSubmit={handleSubmit}>
              {tabItemsData.map((item) => (
                <div>
                  <br />
                  <TextField
                    label="TabsValueLabel"
                    name="tabsDataLabel"
                    required={true}
                    placeholder=""
                    value={item.tabsDataLabel}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                      handleChangeInput(item.id, e)
                    }
                  />
                  &nbsp;
                  <TextField
                    label="TabsValue"
                    name="tabsDataValue"
                    required={true}
                    placeholder=""
                    value={item.tabsDataValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                      handleChangeInput(item.id, e)
                    }
                  />
                  {tabItemsData.length !== 1 ? (
                    <span
                      className="icon"
                      onClick={() => handleRemoveFields(item.id)}
                    >
                      <RemoveCircleIcon />
                    </span>
                  ) : (
                    <></>
                  )}
                  <span className="icon" onClick={handleAddFields}>
                    <AddCircleIcon />
                  </span>
                </div>
              ))}
              <br />
              <Button label="Done" color="secondary" size="small" />
            </form>
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button
          label="Cancel"
          color="success"
          onClick={handleClose}
          size="medium"
        />
        <Button
          label="Save"
          color="success"
          onClick={handleData}
          size="medium"
        />
      </DialogActions>
    </Dialog>
  );
};

export default TabsData;
