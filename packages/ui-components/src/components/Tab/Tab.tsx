import React from "react";
import { Tab as DefaultTab } from "@mui/material";

type Props = {
  label: React.ReactNode;
  value: any;
};

const Tab = ({ label, value, ...rest }: Props) => {
  return <DefaultTab label={label} value={value} />;
};

export default Tab;
