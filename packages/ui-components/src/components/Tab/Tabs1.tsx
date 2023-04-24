import * as React from "react";
import {
  Tabs as DefaultTabs,
  TabsProps as DefaultTabsProps,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "./Tab";

interface TabsProps extends DefaultTabsProps {
  tabItems?:
    | {
        id: string;
        dropId: string;
        tabsDataLabel: string;
        tabsDataValue: string;
      }[]
    | undefined;
  children?: React.ReactNode;
  value?: number;
  onChange?:
    | ((event: React.SyntheticEvent<Element, Event>, value: any) => void)
    | undefined;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabs1 = ({ tabItems, children, value, onChange, ...rest }: TabsProps) => {
  return (
    <DefaultTabs
      value={value}
      onChange={onChange}
      aria-label="basic tabs example"
    >
      {tabItems?.map((item, index) => (
        <Tab label={item.tabsDataLabel} {...a11yProps(index)} />
      ))}
    </DefaultTabs>
  );
};

export default Tabs1;
