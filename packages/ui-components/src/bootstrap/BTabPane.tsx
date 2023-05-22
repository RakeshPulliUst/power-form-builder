import { Tab } from "react-bootstrap";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function BTabPane(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <Tab.Pane eventKey={index + 1} hidden={value !== index}>
      {value === index && children}
    </Tab.Pane>
  );
}

export default BTabPane;
