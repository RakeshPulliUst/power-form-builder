import {
  TabPanel as DefaultTabPanel,
  TabPanelProps as DefaultTabPanelProps,
} from "@mui/lab";

interface TabContextProps extends DefaultTabPanelProps {}

const TabPanel = ({ ...rest }: TabContextProps) => {
  return <DefaultTabPanel {...rest} />;
};

export default TabPanel;
