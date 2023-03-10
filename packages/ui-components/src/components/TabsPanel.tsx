import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TabPanelProps = {
  tabItems: {
    id: string;
    tabsDataLabel: string;
    tabsDataValue: string;
  }[];
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabsPanel = ({ tabItems, children, value, index }: TabPanelProps) => {
  return (
    <>
      {tabItems.map((name, index) => (
        <TabPanel value={value} index={index} tabItems={tabItems}>
          {children}
        </TabPanel>
      ))}
    </>
  );
};

export default TabsPanel;
