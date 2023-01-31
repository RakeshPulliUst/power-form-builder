import React from "react";
import { TabContext as DefaultTabContext } from "@mui/lab";

type Props = {
  value: string;
  children: React.ReactNode;
};

const TabContext = ({ value, children, ...rest }: Props) => {
  return <DefaultTabContext value={value}>{children}</DefaultTabContext>;
};

export default TabContext;
