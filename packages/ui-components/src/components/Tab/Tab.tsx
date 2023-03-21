import React from "react";
import { Tab as DefaultTab, TabProps as DefaultTabProps } from "@mui/material";

interface TabProps extends DefaultTabProps {}

const Tab = ({ ...rest }: TabProps) => {
  return <DefaultTab {...rest} />;
};

export default Tab;
