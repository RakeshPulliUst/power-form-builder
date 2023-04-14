import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
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
  CloseIcon,
} from "@power-form-builder/ui-components";
import { ColumnDialog } from "../DialogInterface";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Element } from "../ElementInterface";

type Props = {
  id: string;
  label: string;
  columnDataSize: string[];
  columnDataWidth: number;
  columnComponents: Element[];
}[];

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type FinalColumnItemProps = {
  id: string;
  label: string;
  columnDataSize: string;
  columnDataWidth: number;
  columnComponents: Element[];
}[];

const ColumnData: React.FC<{
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  columnValues: ColumnDialog;
  element: Element;
}> = ({ open, handleClose, columnValues, handleOpen, element }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  //Column
  const [columnLabel, setColumnLabel] = useState("");
  const [columnItemsData, setColumnItemsData] = useState<Props>([
    {
      id: uuidv4(),
      label: "",
      columnDataSize: [],
      columnDataWidth: 0,
      columnComponents: [
        {
          id: 102,
          element: "Column",
          label: "Ths",
        },
      ],
    },
  ]);

  const [finalColumnItemsData, setFinalColumnItemsData] =
    useState<FinalColumnItemProps>([
      {
        id: uuidv4(),
        label: "",
        columnDataSize: "",
        columnDataWidth: 0,
        columnComponents: [
          {
            id: 102,
            element: "Column",
            label: "Ths",
          },
        ],
      },
    ]);

  const handleColumnLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnLabel(event.target.value);
    console.log(columnLabel);
  };

  const handleData = () => {
    columnValues.label = columnLabel;
    let colDataSize: string;
    let colDataValue: number;
    columnItemsData.map((item) => {
      colDataSize = item.columnDataSize.toString();
      colDataValue = item.columnDataWidth;
      return columnItemsData;
    });
    finalColumnItemsData.map((item) => {
      item.columnDataSize = colDataSize;
      item.columnDataWidth = colDataValue;
      return item;
    });

    columnValues.columnItems = finalColumnItemsData;
    console.log("ColumnValues", columnValues);
    handleOpen();
  };

  useEffect(() => {
    setColumnLabel(element.label!);
    setColumnSize([element.size!]);
    setFinalColumnItemsData(element.columnItems!);
  }, [element.columnItems, element.label, element.size]);

  const handleChangeInput = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = columnItemsData.map((i) => {
      if (id === i.id) {
        console.log("aaa", event.target.name, "bb", event.target.value);
        {
          event.target.name === "columnDataSize"
            ? (i["columnDataSize"] = event.target.value.split(","))
            : (i["columnDataWidth"] = parseInt(event.target.value));
        }
      }
      return i;
    });

    setColumnItemsData(newInputFields);
  };

  const handleAddFields = () => {
    setColumnItemsData([
      ...columnItemsData,
      {
        id: uuidv4(),
        label: "",
        columnDataSize: [],
        columnDataWidth: 0,
        columnComponents: [
          {
            id: 0,
            element: "",
            label: "",
          },
        ],
      },
    ]);
    console.log(columnItemsData);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...columnItemsData];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setColumnItemsData(values);
  };

  const ColumnSizeDataValues = [
    { selectDataLabel: "xs", selectDataValue: "xs" },
    { selectDataLabel: "sm", selectDataValue: "sm" },
    { selectDataLabel: "md", selectDataValue: "md" },
    { selectDataLabel: "lg", selectDataValue: "lg" },
    { selectDataLabel: "xl", selectDataValue: "xl" },
  ];

  const [columnSize, setColumnSize] = useState<string[]>([]);

  const tabItems: TabItemsProps = [{ label: "Display", value: "1" }];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle title="Column Details">
        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }}></CloseIcon>
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
              value={columnLabel}
              onChange={handleColumnLabel}
              variant={"outlined"}
            />

            {columnItemsData.map((item) => (
              <div>
                <br />
                <Select
                  label="Column Size"
                  name="columnDataSize"
                  placeholder="Type To Search"
                  menuItems={ColumnSizeDataValues}
                  multiple={false}
                  value={item.columnDataSize}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | any
                  ): void => handleChangeInput(item.id, e)}
                  width={135}
                  size="medium"
                  required={false}
                />
                &nbsp;
                <TextField
                  label="ColumnValue"
                  name="columnDataWidth"
                  required={true}
                  placeholder=""
                  value={item.columnDataWidth.toString()}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    handleChangeInput(item.id, e)
                  }
                  variant={"outlined"}
                  sx={{ m: 1 }}
                />
                {columnItemsData.length !== 1 ? (
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

export default ColumnData;
