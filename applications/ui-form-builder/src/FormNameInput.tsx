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
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Divider from "@mui/material/Divider";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

type FormNameInput = {
  formName: string;
};

const FormNameInput = ({ open, handleOpen, handleClose }: Props) => {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNameInput>();

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

  const onSubmit = (data: FormNameInput) => {
    try {
      console.log("started");
      const formName = data.formName;
      console.log({
        formName: formName,
      });
      setOpen1(!open1);
      open = !open1;
      getFormName(formName);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog
        open={open1}
        onClose={handleClose}
        style={{
          minHeight: "20%",
          maxHeight: "50%",
          minWidth: "20%",
          maxWidth: "25%",
        }}
      >
        <DialogTitle title="Form Details" />
        <Divider variant="middle" />
        <DialogContent>
          <TabContext value={value}>
            <TabPanel value="1">
              <TextField
                label="Form Name"
                placeholder="Enter Form Name"
                required={true}
                {...register("formName", {
                  required: "Form Name is required",
                  maxLength: {
                    value: 15,
                    message: "Form Name must be max 15 letters",
                  },
                  validate: (value) => {
                    return (
                      [/^[a-zA-Z0-9 /]*$/].every((pattern) =>
                        pattern.test(value)
                      ) || "Only letters & numbers are allowed"
                    );
                  },
                })}
                error={Boolean(errors.formName)}
                helperText={errors.formName?.message}
              />
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <Button
            label="Cancel"
            color="success"
            onClick={handleClose1}
            size="medium"
          />
          <Button
            label="Save"
            color="success"
            onClick={handleSubmit(onSubmit)}
            size="medium"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormNameInput;
