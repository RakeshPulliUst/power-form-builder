import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormNameInput from "./FormNameInput";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar
        light
        expand="md"
        fixed="true"
        className="px-5 sticky-top navbar-dark bg-dark"
      >
        <NavbarBrand href="/">PowerFormBuilder</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => setOpen(!open)}
            >
              Build Form
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {open ? <FormNameInput open={open} /> : <></>}
    </>
  );
};

export default CustomNavbar;
