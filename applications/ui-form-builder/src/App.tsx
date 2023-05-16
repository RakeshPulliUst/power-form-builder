import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormBuilder from "./form-builder/FormBuilder";
import { FormRendererPlayGround } from "./form-renderer/FormRendererPlayGround";
import Home from "./Home";
import CustomNavbar from "./layout/CustomNavbar";
import UpdateFormBuilder from "./form-builder/UpdateFormBuilder";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SingUp";
import UserProfile from "./authentication/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/my-profile" element={<UserProfile />}></Route>
        <Route path="/formbuilder" element={<FormBuilder />}></Route>
        <Route path="/formrender" element={<FormRendererPlayGround />}></Route>
        <Route
          path="/updateformbuilder"
          element={<UpdateFormBuilder />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
