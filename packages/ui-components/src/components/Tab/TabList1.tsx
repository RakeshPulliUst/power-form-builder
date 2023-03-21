import React from "react";
import {
  TabList as DefaultTabList,
  TabListProps as DefaultTabListProps,
} from "@mui/lab";
import Tab from "@mui/material/Tab";

interface TabListProps extends DefaultTabListProps {
  tabItems?:
    | {
        id: string;
        dropId: string;
        tabsDataLabel: string;
        tabsDataValue: string;
      }[]
    | undefined;
}

const TabList1 = ({ tabItems, ...rest }: TabListProps) => {
  return (
    <DefaultTabList {...rest}>
      {tabItems?.map((item, index) => (
        <Tab label={item.tabsDataLabel} value={item.tabsDataValue} />
      ))}
    </DefaultTabList>
  );
};

export default TabList1;
