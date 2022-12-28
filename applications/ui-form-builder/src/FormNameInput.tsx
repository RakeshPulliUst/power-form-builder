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
import { MuiButton, MuiTextField } from "@power-form-builder/ui-components";

type Props = {
  open: boolean;
};

function FormNameInput({ open }: Props) {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);
  const [formName, setFormName] = useState("");
  const navigate = useNavigate();
  const handleFormName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
    console.log(formName);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    setOpen1(!open1);
    navigate("/formbuilder", { state: { formName: formName } });
  };

  return (
    <div>
      {" "}
      <Dialog
        open={open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Component Details"}</DialogTitle>
        <DialogContent>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Display" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DialogContentText id="alert-dialog-description">
                <MuiTextField
                  label="FormName"
                  required={true}
                  value={formName}
                  onChange={handleFormName}
                />
              </DialogContentText>
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <MuiButton
            label="Agree"
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
