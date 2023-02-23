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
} from "@power-form-builder/ui-components";
import React, { useEffect, useState } from "react";
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
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(retrievedObject.user);

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

  //Creating function to post data on server
  const getAllData = () => {
    axios.get(`http://localhost:4000/api/form/showAll`).then(
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
  const [id, setId] = useState(-1);
  const onDeleteClick = (id: number) => {
    console.log("Delete", id);
    setDialogOpen(true);
    setId(id);
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
      <Table minWidth={1500}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Form Name</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Date Modified</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((row) => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.form_title}</TableCell>
              <TableCell>{row.date_created}</TableCell>
              <TableCell>{row.date_modified}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button
                  label="Preview"
                  color="warning"
                  size="large"
                  onClick={() => {
                    onPreviewClick(row.form_title, row.components);
                  }}
                />
                &nbsp;
                <Button
                  label="Edit"
                  color="primary"
                  size="large"
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
                <Button
                  label="Delete"
                  color="error"
                  size="large"
                  onClick={() => onDeleteClick(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="home-container">
        <h1>
          <UITranslation name="welcome_to_our_formsite" />
        </h1>
        <div className="home-btns">
          <Button
            label="Build Form"
            color="secondary"
            size="large"
            onClick={handleBuildForm}
          />
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
        <DialogTitle title="Confirm To Submit" />
        <DialogContent>
          <p>Are you sure to delete the form. </p>
        </DialogContent>
        <DialogActions>
          <Button
            label="Cancel"
            color="success"
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
            size="medium"
          />
          <Button
            label="Save"
            color="success"
            onClick={() => handleData(id)}
            size="medium"
          />
        </DialogActions>
      </Dialog>
      ;
    </>
  );
};

export default Home;
