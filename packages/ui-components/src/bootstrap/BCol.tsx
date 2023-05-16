import React from "react";
import {
  Col,
  ColProps as DefaultColProps,
  Container,
  Row,
} from "react-bootstrap";

interface ColProps extends DefaultColProps {}

const BCol = ({...rest}: ColProps) => {
  return <Col {...rest} />;
};

export default BCol;
