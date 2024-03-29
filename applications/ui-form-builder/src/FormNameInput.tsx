import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tabs,
  TabPanel,
  Divider,
  TextField,
  CloseIcon,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import { useForm } from "react-hook-form";

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
        style={{
          minHeight: "30%",
          maxHeight: "80%",
          minWidth: "20%",
          maxWidth: "30%",
        }}
      >
        <DialogTitle title="Form Details">
          <CloseIcon
            onClick={handleClose1}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <Tabs value={0} />
          <TabPanel value={0} index={0}>
            <TextField
              label="Form Name"
              placeholder="Enter Form Name"
              id="formName"
              {...register("formName", {
                required: "Form Name is required",
                maxLength: {
                  value: 25,
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
          </TabPanel>
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
