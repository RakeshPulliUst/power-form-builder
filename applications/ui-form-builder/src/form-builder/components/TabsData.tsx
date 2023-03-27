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
  Divider,
  CloseIcon
} from "@power-form-builder/ui-components";
import { TabsDialog } from "../DialogInterface";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Element } from "../ElementInterface";


type Props = {
  id: string;
  dropId: string;
  tabsDataLabel: string;
  tabsDataValue: string;
  tabComponents?: Element[];
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
      dropId: "tabsDroppableId",
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

  const [rr] = useState([
    "tabsDroppableId",
    "tabsDroppableId2",
    "tabsDroppableId3",
    "tabsDroppableId4",
    "tabsDroppableId5",
  ]);

  const handleData = () => {
    tabValues.label = tabsLabel;
    tabItemsData.map((item, index) => (item.dropId = rr[index]));
    tabValues.tabItems = tabItemsData;
    console.log(tabValues);
    handleOpen();
  };

  useEffect(() => {
    setTabsLabel(element.label!);
    setTabItemsData(element.tabItems!);
  }, [element.label, element.tabItems]);

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
    console.log(newInputFields);
    setTabItemsData(newInputFields);
  };

  const handleAddFields = () => {
    setTabItemsData([
      ...tabItemsData,
      {
        id: uuidv4(),
        dropId: "tabsDroppableId",
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
      <DialogTitle title="Tabs Details">
        <CloseIcon
          onClick={handleClose}
          sx={{ cursor: "pointer" }}
        ></CloseIcon>
      </DialogTitle>
      <Divider variant="middle" />
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
              variant={"outlined"}
            />
          </TabPanel>
          <TabPanel value="2">
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
                  variant={"outlined"}
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
                  variant={"outlined"}
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
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose} size="medium">
          Cancel
        </Button>
        <Button color="success" onClick={handleData} size="medium">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TabsData;
