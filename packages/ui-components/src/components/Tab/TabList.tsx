import React from "react";
import { TabList as DefaultTabList } from "@mui/lab";
import Tab from "@mui/material/Tab";
type Props = {
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
  tabItems: {
    label: React.ReactNode;
    value: string;
  }[];
};

const TabList = ({ onChange, tabItems, ...rest }: Props) => {
  return (
    <DefaultTabList onChange={onChange}>
      {tabItems.map((item, index) => (
        <Tab label={item.label} value={item.value} />
      ))}
    </DefaultTabList>
  );
};

export default TabList;
