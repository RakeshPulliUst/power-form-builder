import * as React from "react";
import { Tabs as DefaultTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type TabsProps = {
  tabItems: {
    id: string;
    tabsDataLabel: string;
    tabsDataValue: string;
  }[];
  children?: React.ReactNode;
};

const Tabs = ({ tabItems, children, ...rest }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <DefaultTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabItems.map((name, index) => (
            <Tab label={name.tabsDataLabel} {...a11yProps(0)}></Tab>
          ))}
        </DefaultTabs>
        {children}
      </Box>
    </Box>
  );
};

export default Tabs;
