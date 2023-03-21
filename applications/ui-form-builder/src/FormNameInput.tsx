import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TabContext,
  TabPanel,
  Divider,
  //TextField,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

type FormNameInputProps = {
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
  } = useForm<FormNameInputProps>();

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

  const onSubmit = (data: FormNameInputProps) => {
    console.log(errors);
    try {
      console.log("started");
      console.log(errors);
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
        // style={{
        //   minHeight: "60%",
        //   maxHeight: "60%",
        //   minWidth: "55%",
        //   maxWidth: "65%",
        // }}
        // style={{
        //   minHeight: "30%",
        //   maxHeight: "100%",
        //   minWidth: "30%",
        //   maxWidth: "50%",
        // }}
      >
        <DialogTitle title="Form Details">
          <CloseOutlinedIcon
            onClick={handleClose1}
            sx={{ cursor: "pointer" }}
          ></CloseOutlinedIcon>
        </DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <TabContext value={value}>
            <TabPanel value="1">
              <TextField
                label="Form Name"
                placeholder="Enter Form Name"
                id="formName"
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
                      ) || "Only letters, numbers & spaces are allowed"
                    );
                  },
                })}
                error={Boolean(errors.formName)}
                helperText={errors.formName?.message}
                variant="outlined"
              />
              {errors.formName && <span>Name is required</span>}
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose1} size="medium">
            Cancel
          </Button>
          <Button
            color="success"
            onClick={handleSubmit(onSubmit)}
            size="medium"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormNameInput;
