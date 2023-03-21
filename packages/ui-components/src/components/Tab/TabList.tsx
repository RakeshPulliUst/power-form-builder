import React from "react";
import {
  TabList as DefaultTabList,
  TabListProps as DefaultTabListProps,
} from "@mui/lab";
import Tab from "@mui/material/Tab";

interface TabListProps extends DefaultTabListProps {
  tabItems: {
    label: React.ReactNode;
    value: string;
  }[];
}

const TabList = ({ tabItems, ...rest }: TabListProps) => {
  return (
    <DefaultTabList {...rest}>
      {tabItems.map((item, index) => (
        <Tab label={item.label} value={item.value} />
      ))}
    </DefaultTabList>
  );
};

export default TabList;
