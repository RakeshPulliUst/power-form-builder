import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormBuilder from "./form-builder/FormBuilder";
import MaterialForm from "./form-renderer/material-form";
import Home from "./Home";
import CustomNavbar from "./CustomNavbar";
import { Header } from "@power-form-builder/ui-translation";
import { UITranslation } from "@power-form-builder/ui-translation";
import { LanguageDropDown } from "@power-form-builder/ui-translation";
import { useState } from "react";
import UpdateFormBuilder from "./form-builder/UpdateFormBuilder";
import SignIn from "./SignIn";
import SignUp from "./SingUp";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formbuilder" element={<FormBuilder />}></Route>
        <Route path="/formrender" element={<MaterialForm />}></Route>
        <Route
          path="/updateformbuilder"
          element={<UpdateFormBuilder />}
        ></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    //   <UITranslation name="header" />
    // </>
  );
};

export default App;
