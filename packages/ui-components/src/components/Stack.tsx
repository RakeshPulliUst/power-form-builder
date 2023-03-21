import {
  Stack as DefaultStack,
  StackProps as DefaultStackProps,
} from "@mui/material";

interface StackProps extends DefaultStackProps {}

const Stack = ({ ...rest }: StackProps) => {
  return <DefaultStack {...rest} />;
};

export default Stack;
