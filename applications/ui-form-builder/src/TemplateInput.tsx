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
  Select,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormJson } from "./form-builder/ElementInterface";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  formData: FormJson;
};

type TemplateInputProps = {
  cssFramework: string;
};

const TemplateInput = ({ open, handleOpen, handleClose, formData }: Props) => {
  const [open1, setOpen1] = useState(open);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TemplateInputProps>();

  //Select Css Framework
  const SelectCssFramework = [
    { selectDataLabel: "Material-UI", selectDataValue: "Material-UI" },
    { selectDataLabel: "Bootstrap", selectDataValue: "Bootstrap" },
  ];
  const [selectCssFramework, setSelectCssFramework] = useState<string[]>([]);

  const handleSelectCssFramework = (event: any) => {
    const selectvalue = event.target.value;
    setSelectCssFramework(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  const handleClose1 = () => {
    console.log(!open1);
    setOpen1(!open1);
    open = !open1;
    handleClose();
  };

  const onSubmit = () => {
    console.log(errors);
    try {
      console.log("started");
      console.log(selectCssFramework);
      setOpen1(!open1);
      open = !open1;
      handleOpen();

      navigate("/formrender", {
        state: { formData: formData, cssFramework: selectCssFramework },
      });
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
        <DialogTitle title="CSS Framework">
          <CloseIcon
            onClick={handleClose1}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <Tabs value={0} />
          <TabPanel value={0} index={0}>
            <Select
              label="Select Template"
              placeholder="Type To Search"
              menuItems={SelectCssFramework}
              multiple={false}
              value={selectCssFramework}
              width={225}
              size="medium"
              onChange={handleSelectCssFramework}
              required={false}
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

export default TemplateInput;
