import { TFunction } from "i18next";
import "./App.css";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
};

function UITranslation(props: Props) {
  const { t } = useTranslation();

  return <>{t(props.name)}</>;
}

export default UITranslation;
