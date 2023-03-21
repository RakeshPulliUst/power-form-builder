import React from "react";
import {
  TabContext as DefaultTabContext,
  TabContextProps as DefaultTabContextProps,
} from "@mui/lab";

interface TabContextProps extends DefaultTabContextProps {}

const TabContext = ({ ...rest }: TabContextProps) => {
  return <DefaultTabContext {...rest} />;
};

export default TabContext;
