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
        // item.label === "Tab1" ||
        // item.label === "Tab2" ||
        // item.label === "Tab3" ||
        // item.label === "Tab4" ||
        // item.label === "Tab5" ? (
        //   <>
        //     {console.log(
        //       "Tablist..",
        //       item.label,
        //       "sds",
        //       item.label === "Tab1" || "Tab2" || "Tab3" || "Tab4" || "Tab5"
        //     )}{" "}
        //   </>
        // ) : (
        <Tab label={item.label} value={item.value} />
      ))}
    </DefaultTabList>
  );
};

export default TabList;
