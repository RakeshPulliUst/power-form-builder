import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormBuilder from "./form-builder/components/FormBuilder";
import MaterialForm from "./form-renderer/material-form";
import Home from "./Home";
import CustomNavbar from "./CustomNavbar";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formbuilder" element={<FormBuilder />}></Route>
        <Route path="/formrender" element={<MaterialForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
