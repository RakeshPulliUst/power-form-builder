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
import { Header, UITranslation } from "@power-form-builder/ui-translation";
const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(!open);
    setOpen(!open);
  };

  const handleClose = () => {
    console.log(!open);
    setOpen(!open);
  };

  return (
    <>
      <Navbar
        light
        expand="md"
        fixed="true"
        className=" sticky-top navbar-dark bg-dark"
      >
        <NavbarBrand href="/">
          <UITranslation name="form_site" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                console.log(!open);
                setOpen(!open);
              }}
            >
              <UITranslation name="build_form" />
            </NavItem>
          </Nav>
          <Nav className="justify-content-end" style={{ marginRight: "0%" }}>
            <Header />
          </Nav>
        </Collapse>
      </Navbar>
      {open ? (
        <FormNameInput
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomNavbar;
