import React from "react";
import { Row, RowProps as DefaultRowProps, Container } from "react-bootstrap";

interface RowProps extends DefaultRowProps {}

const BRow = ({ ...rest }: RowProps) => {
  return <Row {...rest} />;
};

export default BRow;
