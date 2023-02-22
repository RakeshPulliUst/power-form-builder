import React from "react";
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
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import FormNameInput from "./FormNameInput";
import { Header, UITranslation } from "@power-form-builder/ui-translation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { logout } from "./signinSlice";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  const { user, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.userLogin
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        className=" sticky-top navbar-dark bg-dark"
      >
        <NavbarBrand href="/home">
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

          <Nav>
            {isAuthenticated ? (
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret color="dark">
                  {/* <DropdownToggle caret nav color="dark"> */}
                  Hello {user?.firstname}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/user/my-profile">
                    My Profile
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <></>
            )}

            <NavItem>
              <Header />
            </NavItem>
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
