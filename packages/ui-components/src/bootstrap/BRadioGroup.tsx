import { Form } from "react-bootstrap";
import React, { FC } from "react";

interface RadioGroupProps {
  label: string;
  required: boolean;
  options: "end" | "start" | "top" | "bottom";
  // value: string;
  radioItems: {
    radioButtonDataLabel: string;
    radioButtonDataValue: string;
  }[];
  name?: string;
  onChange?: any;
}

const BRadioGroup: FC<RadioGroupProps> = ({
  label,
  required,
  options,
  radioItems,
  // value,
  name,
  onChange,
  ...rest
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div>
        {radioItems.map((item, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={item.radioButtonDataLabel}
            // value={item.radioButtonDataValue}
            name={name}
            // checked={value === item.radioButtonDataValue}
            onChange={onChange}
            {...rest}
          />
        ))}
      </div>
    </Form.Group>
  );
};

export default BRadioGroup;
