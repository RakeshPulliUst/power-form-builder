import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Divider,
  TextField,
  CloseIcon,
  PreviewIcon,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@power-form-builder/ui-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  FinalSaveFormHistoryJson,
  FormJson,
  finalTableFormHistorySample,
  sample,
} from "./form-builder/ElementInterface";
import { Element } from "./form-builder/ElementInterface";

type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  formId: number;
};

type FormHistoryDialogProps = {
  formName: string;
};

const FormHistoryDialog = ({
  open,
  handleOpen,
  handleClose,
  formId,
}: Props) => {
  const [value, setValue] = useState("1");
  const [open1, setOpen1] = useState(open);
  const [formHistoryData, setFormHistoryData] = useState<
    FinalSaveFormHistoryJson[]
  >(finalTableFormHistorySample);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormHistoryDialogProps>();

  const handleClose1 = () => {
    console.log(!open1);
    setOpen1(!open1);
    open = !open1;
    handleClose();
  };

  //Preview the form
  const [formDataPreview, setFormDataPreview] = useState<FormJson>(sample);
  const onPreviewClick = (form_title: string, components: Element[]) => {
    formDataPreview.form_title = form_title;
    formDataPreview.components = components;
    console.log(formHistoryData);
    setFormDataPreview(formDataPreview);
    navigate("/formrender", { state: { formData: formDataPreview } });
  };

  //   const getFormName = (formName: string) => {
  //     axios.get(`http://localhost:4000/api/form/getFormName/${formName}`).then(
  //       (response) => {
  //         if (response.data.form_title) {
  //           alert("Form Already Exist");
  //         } else {
  //           navigate("/formbuilder", {
  //             state: { formName: formName, formInitialComponents: [] },
  //           });
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //         console.log("error");
  //       }
  //     );
  //   };

  useEffect(() => {
    getFormHistoryDataByFormId(formId);
  }, []);

  const getFormHistoryDataByFormId = (formId: number) => {
    axios
      .get(`http://localhost:4000/api/formHistory/getByFormId/${formId}`)
      .then(
        (response) => {
          setFormHistoryData(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
          console.log("error");
        }
      );
  };

  const onSubmit = (data: FormHistoryDialogProps) => {
    console.log(errors);
    try {
      console.log("started");
      console.log(errors);
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
          minHeight: "75%",
          maxHeight: "100%",
          minWidth: "60%",
          maxWidth: "60%",
        }}
      >
        <DialogTitle title="Form History Details">
          <CloseIcon
            onClick={handleClose1}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <Table minWidth={850}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Form Name</TableCell>
                <TableCell> Modified Date</TableCell>
                <TableCell>Version</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formHistoryData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.form_title}</TableCell>
                  <TableCell>{row.date_modified}</TableCell>
                  <TableCell>{row.version}</TableCell>
                  <TableCell>
                    <PreviewIcon
                      onClick={() => {
                        onPreviewClick(row.form_title, row.components);
                      }}
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                      color="action"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose1} size="medium">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormHistoryDialog;
