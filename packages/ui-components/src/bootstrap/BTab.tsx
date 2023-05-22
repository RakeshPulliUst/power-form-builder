import {
  Tab as DefaultTab,
  TabProps as DefaultTabProps,
} from "react-bootstrap";

interface TabProps extends DefaultTabProps {}

const BTab = ({ ...rest }: TabProps) => {
  return <DefaultTab {...rest} />;
};

export default BTab;
