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
      getFormName(formName);
    } else {
      console.log("For1", formName);
      setHelperText("Enter Form Details");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
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
            onClick={handleClose}
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
