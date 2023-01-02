import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {console.log(checked)}
      <Checkbox
        checked={checked}
        onChange={handleChange}
        defaultChecked={true}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
}
