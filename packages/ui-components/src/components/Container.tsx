import {
  Container as DefaultContainer,
  ContainerProps as DefaultContainerProps,
} from "@mui/material";

interface ContainerProps extends DefaultContainerProps {}

const Container = ({ ...rest }: ContainerProps) => {
  return <DefaultContainer {...rest} />;
};

export default Container;
