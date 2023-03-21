import { TFunction } from "i18next";
import "./App.css";
import LanguageDropDown from "./LanguageDropDown";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
};

function UITranslation1(props: Props) {
  const { t } = useTranslation();

  return t;
}

export default UITranslation1;
