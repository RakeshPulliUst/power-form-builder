import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TabPanel,
  Divider,
  TextField,
  CloseIcon,
  Tabs,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import { useForm } from "react-hook-form";

type Props = {
  setChangedPassword: Dispatch<SetStateAction<string>>;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

type TabItemsProps = {
  label: React.ReactNode;
  value: string;
}[];

type ChangePassword = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = ({
  setChangedPassword,
  open,
  handleOpen,
  handleClose,
}: Props) => {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePassword>();

  const handleClose1 = () => {
    console.log(!open1);
    setOpen1(!open1);
    open = !open1;
    handleClose();
  };

  const onSubmit = (data: ChangePassword) => {
    try {
      console.log("started");
      const password = data.password;
      const confirmPassword = data.confirmPassword;

      console.log({
        password: password,
        confirmPassword: confirmPassword,
      });
      setOpen1(!open1);
      open = !open1;
      setChangedPassword(password);
      console.log(password);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };

  const tabItems: TabItemsProps = [{ label: "Display", value: "0" }];

  return (
    <div>
      <Dialog
        open={open1}
        onClose={handleClose}
        style={{
          minHeight: "10%",
          maxHeight: "100%",
          minWidth: "20%",
          maxWidth: "25%",
        }}
      >
        <DialogTitle title="Password Change">
          <CloseIcon
            onClick={handleClose1}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <Tabs value={0}></Tabs>
          <TabPanel value={0} index={0}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 letters long",
                },
                validate: (value) => {
                  return (
                    [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(
                      (pattern) => pattern.test(value)
                    ) ||
                    "Password must include lower & upper letters, number and special characters"
                  );
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 letters long",
                },
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do no match";
                  }
                },
              })}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
              sx={{ marginTop: "10px" }}
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

export default ChangePassword;
