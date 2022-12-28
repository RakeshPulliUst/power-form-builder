import { MuiButton } from "@power-form-builder/ui-components";
import React, { useState } from "react";
import "./Home.css";

import FormNameInput from "./FormNameInput";

type Props = {};

function Home({}: Props) {
  const [open, setOpen] = useState(false);

  const handleBuildForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  };

  return (
    <>
      <div className="home-container">
        <h1>Welcome to our Power Form Builder</h1>
        <div className="home-btns">
          <MuiButton
            label="Build Form"
            color="secondary"
            size="large"
            onClick={handleBuildForm}
          />
        </div>
      </div>
      {open ? <FormNameInput open={open} /> : <></>}
    </>
  );
}

export default Home;
