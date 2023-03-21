import { Header } from "./components/Header";
import UITranslation from "./components/UITraslation";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/i18next";
import i18next from "./components/i18next";
import LanguageDropDown from "./components/LanguageDropDown";
import UITranslation1 from "./components/UITranslation1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { Header };
export { i18next };
export { UITranslation, UITranslation1 };
export { LanguageDropDown };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
