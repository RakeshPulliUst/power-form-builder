import { Tabs as DefaultTabs } from "react-bootstrap";
import { TabsProps as DefaultTabsProps } from "react-bootstrap";
import BTab from "./BTab";

interface TabsProps extends DefaultTabsProps {
  tabItems?:
    | {
        id: string;
        dropId: string;
        tabsDataLabel: string;
        tabsDataValue: string;
      }[]
    | undefined;
  children?: React.ReactNode;
  value?: number;
  onChange?: any;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BTabs = ({ tabItems, children, value, onChange, ...rest }: TabsProps) => {
  return (
    <DefaultTabs
      activeKey={value}
      onSelect={onChange}
      id="basic-tabs-example"
      role="tablist"
    >
      {children}
    </DefaultTabs>
  );
};

export default BTabs;
