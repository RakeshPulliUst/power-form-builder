import React from "react";
import { TabPanel as DefaultTabPanel } from "@mui/lab";
type Props = {
  value: string;
  children: React.ReactNode;
};

const TabPanel = ({ value, children }: Props) => {
  return <DefaultTabPanel value={value}>{children}</DefaultTabPanel>;
};

export default TabPanel;
