import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TabContext,
  TabPanel,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@power-form-builder/ui-components";
import axios from "axios";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

function FormNameInput({ open, handleOpen, handleClose }: Props) {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);
  const [formName, setFormName] = useState("");
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();

  const handleFormName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
    console.log(formName);
  };

  const handleClose1 = () => {
    console.log(!open1);
    setOpen1(!open1);
    open = !open1;
    handleClose();
  };

  const getFormName = (formName: string) => {
    axios.get(`http://localhost:4000/api/form/getFormName/${formName}`).then(
      (response) => {
        if (response.data.form_title) {
          alert("Form Already Exist");
        } else {
          navigate("/formbuilder", {
            state: { formName: formName, formInitialComponents: [] },
          });
        }
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const handleSubmit = () => {
    if (formName) {
      console.log("For", formName);
      setOpen1(!open1);
      open = !open1;
      getFormName(formName);
      handleOpen();
    } else {
      console.log("For1", formName);
      setHelperText("Enter Form Details");
    }
  };

  return (
    <div>
      <Dialog
        open={open1}
        onClose={handleClose}
        style={{
          minHeight: "30%",
          maxHeight: "40%",
          minWidth: "30%",
          maxWidth: "30%",
        }}
      >
        <DialogTitle title="Form Details" />
        <DialogContent>
          <TabContext value={value}>
            <TabPanel value="1">
              <TextField
                label="Form Name"
                placeholder="Enter Form Name"
                required={true}
                value={formName}
                helperText={helperText}
                onChange={handleFormName}
              />
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <Button
            label="Cancel"
            color="success"
            onClick={handleClose1 }
            size="medium"
          />
          <Button
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
