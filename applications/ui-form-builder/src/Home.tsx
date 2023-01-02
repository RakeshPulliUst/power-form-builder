import { MuiButton } from "@power-form-builder/ui-components";
import React, { useState } from "react";
import "./Home.css";
import { UITranslation } from "@power-form-builder/ui-translation";
import FormNameInput from "./FormNameInput";
import ReactDOMServer from "react-dom/server";

type Props = {};

function Home({}: Props) {
  const [open, setOpen] = useState(false);

  const handleBuildForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  };

  return (
    <>
      <div className="home-container">
        <h1>
          <UITranslation name="welcome_to_our_formsite" />
        </h1>
        <div className="home-btns">
          <MuiButton
            label="Build Form"
            color="secondary"
            size="large"
            onClick={handleBuildForm}
          />
        </div>
        {open ? <FormNameInput open={open} /> : <></>}
      </div>
    </>
  );
}

export default Home;
