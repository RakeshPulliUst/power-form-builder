import * as React from "react";
import {
  Tabs as DefaultTabs,
  TabsProps as DefaultTabsProps,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

interface TabsProps extends DefaultTabsProps {
  tabItems: {
    id: string;
    tabsDataLabel: string;
    tabsDataValue: string;
  }[];
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Tabs = ({ tabItems, children, ...rest }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <DefaultTabs {...rest} />
      </Box>
      {tabItems.map((name, index) => (
        <TabPanel value={value} index={index}>
          {children}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;
