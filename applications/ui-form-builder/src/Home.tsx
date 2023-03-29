import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  ContentCopyIcon,
  DeleteForeverIcon,
  EditIcon,
  CloseIcon,
  PreviewIcon,
} from "@power-form-builder/ui-components";

import "./Home.css";
import { UITranslation } from "@power-form-builder/ui-translation";
import FormNameInput from "./FormNameInput";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FinalSaveFormJson,
  FormJson,
  finalTableFormSample,
  sample,
} from "./form-builder/ElementInterface";
import { useNavigate } from "react-router-dom";
import { Element } from "./form-builder/ElementInterface";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] =
    useState<FinalSaveFormJson[]>(finalTableFormSample);

  // const { user, isAuthenticated, loading, error } = useSelector(
  //   (state: RootState) => state.userLogin
  // );

  const storedValue = localStorage.getItem("loginState");
  const retrievedObject = JSON.parse(storedValue!);
  const user = retrievedObject.user;
  console.log(user);

  //const savedState = localStorage.getItem("reduxState");
  const handleBuildForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(!open);
    setOpen(!open);
  };

  useEffect(() => {
    getDataByOwner();
  }, []);

  //Creating function to post data on server
  const getDataByOwner = () => {
    axios
      .get(`http://localhost:4000/api/form/getFormByOwner/${user.email}`)
      .then(
        (response) => {
          setFormData(response.data);
        },
        (error) => {
          console.log(error);
          console.log("error");
          toast.error("Something went wrong");
        }
      );
  };

  //Delete function to delete data on server
  const deleteForm = (formId: number) => {
    axios.delete(`http://localhost:4000/api/form/delete/${formId}`).then(
      (response) => {
        console.log("Inside Delete");
        toast.success("Deleted");
        getDataByOwner();
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };

  //Preview the form
  const [formDataPreview, setFormDataPreview] = useState<FormJson>(sample);
  const navigate = useNavigate();
  const onPreviewClick = (form_title: string, components: Element[]) => {
    console.log("Preview", id);
    formDataPreview.form_title = form_title;
    formDataPreview.components = components;
    console.log(formData);
    setFormDataPreview(formDataPreview);
    navigate("/formrender", { state: { formData: formDataPreview } });
  };

  //Edit the form
  const onEditClick = (
    id: number,
    form_title: string,
    components: Element[],
    date_created: string,
    status: string
  ) => {
    console.log("Edit", id);
    navigate("/updateformbuilder", {
      state: {
        formId: id,
        formName: form_title,
        formInitialComponents: components,
        formCreatedDate: date_created,
        formStatus: status,
      },
    });
  };

  //Delete the form
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [id, setId] = useState(-1);
  const onDeleteClick = (id: number, formName: string) => {
    console.log("Delete", id, formName);
    setDialogOpen(true);
    setId(id);
    setFormTitle(formName);
  };

  const handleData = (id: number) => {
    deleteForm(id);
    setDialogOpen(!dialogOpen);
  };

  const handleOpen = () => {
    console.log(!open);
    setOpen(!open);
  };

  const handleClose = () => {
    console.log(!open);
    setOpen(!open);
  };

  return (
    <>
      <div className="home-form-table">
        <Table minWidth={1500}>
          <TableHead>
            <TableRow>
              <TableCell>
                <UITranslation name="id" />
              </TableCell>
              <TableCell>
                <UITranslation name="form_name" />
              </TableCell>
              <TableCell>
                <UITranslation name="created_date" />
              </TableCell>
              <TableCell>
                {" "}
                <UITranslation name="modified_date" />
              </TableCell>
              <TableCell>
                <UITranslation name="status" />
              </TableCell>
              <TableCell>
                <UITranslation name="action" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.form_title}</TableCell>
                <TableCell>{row.date_created}</TableCell>
                <TableCell>{row.date_modified}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <PreviewIcon
                    onClick={() => {
                      onPreviewClick(row.form_title, row.components);
                    }}
                    sx={{ cursor: "pointer", fontSize: "30px" }}
                    color="action"
                  />
                  &nbsp;
                  <EditIcon
                    sx={{ cursor: "pointer", fontSize: "30px" }}
                    color="primary"
                    onClick={() =>
                      onEditClick(
                        row.id,
                        row.form_title,
                        row.components,
                        row.date_created,
                        row.status
                      )
                    }
                  />
                  &nbsp;
                  <ContentCopyIcon
                    sx={{ cursor: "pointer", fontSize: "30px" }}
                    onClick={() => {
                      console.log(JSON.stringify(row.components));
                      navigator.clipboard.writeText(
                        JSON.stringify(row.components)
                      );
                    }}
                    color="action"
                  />
                  &nbsp;
                  <DeleteForeverIcon
                    sx={{ cursor: "pointer", fontSize: "30px" }}
                    color="error"
                    onClick={() => onDeleteClick(row.id, row.form_title)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="home-container">
        <h1>
          <UITranslation name="welcome_to_our_formsite" />
        </h1>
        <div className="home-btns">
          <Button color="secondary" size="large" onClick={handleBuildForm}>
            <UITranslation name="build_form" />
          </Button>
        </div>
        {open ? (
          <FormNameInput
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        ) : (
          <></>
        )}
      </div>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(!dialogOpen);
        }}
        style={{
          minHeight: "30%",
          maxHeight: "40%",
          minWidth: "30%",
          maxWidth: "30%",
        }}
      >
        <DialogTitle title="Warning">
          <CloseIcon
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
            sx={{ cursor: "pointer" }}
          />
        </DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <p>
            {" "}
            <UITranslation name="delete_form_alert" /> - {formTitle}?
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
            size="medium"
          >
            <UITranslation name="no" />
          </Button>
          <Button color="success" onClick={() => handleData(id)} size="medium">
            <UITranslation name="yes" />
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </>
  );
};

export default Home;
