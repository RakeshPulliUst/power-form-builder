import React from "react";
import { FormControl } from "react-bootstrap";

type TextFieldProps = React.ComponentProps<typeof FormControl>;

const BTextField = React.forwardRef(({ ...rest }: TextFieldProps, ref) => {
  return <FormControl {...rest} ref={ref} />;
});

export default BTextField;
