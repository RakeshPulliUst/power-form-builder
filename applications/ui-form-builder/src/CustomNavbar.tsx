import React, { useRef } from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, NavLink as ReactLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import FormNameInput from "./FormNameInput";
import { Header, UITranslation } from "@power-form-builder/ui-translation";
import { useDispatch } from "react-redux";
import { logout } from "./signinSlice";

const CustomNavbar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  const storedValue = localStorage.getItem("loginState");
  const retrievedObject = JSON.parse(storedValue!);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSite = () => {
    if (!retrievedObject.user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  };

  const handleOpen = () => {
    console.log(!open);
    setOpen(!open);
  };

  const handleClose = () => {
    console.log(!open);
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navbar
        light
        expand="md"
        fixed="true"
        className="sticky-top navbar-dark bg-dark"
      >
        <NavbarBrand onClick={handleFormSite} style={{ cursor: "pointer" }}>
          <UITranslation name="form_site" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {retrievedObject.isAuthenticated ? (
          <div>
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
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

              <Nav style={{ paddingLeft: "10px" }}>
                <NavItem>
                  <Header />
                </NavItem>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret color="dark" inner={ref}>
                    {/* <DropdownToggle caret nav color="dark"> */}
                    Hello {retrievedObject.user?.firstname}
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem tag={ReactLink} to="/user/my-profile">
                      My Profile
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        ) : (
          <>
            <Nav>
              <NavItem style={{ marginRight: "10px" }}>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#F5F5F5" : "#808080",
                    textDecoration: "none",
                  })}
                >
                  Login
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/signup"
                  style={({ isActive }) => ({
                    color: isActive ? "#F5F5F5" : "#808080",
                    textDecoration: "none",
                  })}
                >
                  Signup
                </NavLink>
              </NavItem>
            </Nav>
          </>
        )}
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
