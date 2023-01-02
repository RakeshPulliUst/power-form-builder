import { Header } from "./components/Header";
import UITranslation from "./components/UITraslation";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/i18next";
import i18next from "./components/i18next";
import LanguageDropDown from "./components/LanguageDropDown";

// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ["en", "ar", "fr"],
//     fallbackLng: "en",
//     debug: false,
//     // Options for language detector
//     detection: {
//       order: ["path", "cookie", "htmlTag"],
//       caches: ["cookie"],
//     },
//     // react: { useSuspense: false },
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json",
//     },
//   });

// ReactDOM.render(
//   <Suspense fallback={loadingMarkup}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Suspense>,
//   document.getElementById("root")
// );

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
export { UITranslation };
export { LanguageDropDown };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
