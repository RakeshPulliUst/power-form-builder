import React from "react";
import { Form } from "react-bootstrap";

interface SelectProps {
  label: string;
  menuItems: {
    selectDataLabel: string;
    selectDataValue: string;
  }[];
  placeholder: string;
  width?: number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

const BSelect = ({
  label,
  menuItems,
  placeholder,
  width,
  onChange,
  value,
  ...rest
}: SelectProps) => {
  return (
    <Form.Group className="mb-3" style={{ width: width }}>
      <Form.Label>{label}</Form.Label>
      <Form.Select onChange={onChange} value={value} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {menuItems.map((item, index) => (
          <option key={index} value={item.selectDataValue}>
            {item.selectDataLabel}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default BSelect;
