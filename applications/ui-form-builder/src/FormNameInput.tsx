import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { MuiButton, TextField } from "@power-form-builder/ui-components";

type Props = {
  open: boolean;
};

function FormNameInput({ open }: Props) {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);
  const [formName, setFormName] = useState("");
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();

  const handleFormName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
    console.log(formName);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleSubmit = () => {
    if (formName) {
      console.log("For", formName);
      setOpen1(!open1);
      navigate("/formbuilder", { state: { formName: formName } });
    } else {
      console.log("For1", formName);
      setHelperText("Enter Form Details");
    }
  };

  return (
    <div>
      {" "}
      <Dialog
        open={open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onSubmit={handleSubmit}
      >
        <DialogTitle id="alert-dialog-title">{"Form Details"}</DialogTitle>
        <DialogContent>
          <TabContext value={value}>
            <TabPanel value="1">
              <DialogContentText id="alert-dialog-description">
                <TextField
                  label="Form Name"
                  placeholder="Enter Form Name"
                  required={true}
                  value={formName}
                  helperText={helperText}
                  onChange={handleFormName}
                />
              </DialogContentText>
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <MuiButton
            label="Save"
            color="success"
            onClick={handleSubmit}
            size="medium"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormNameInput;
