import * as React from "react";
import {
  Button,
  TextField,
  Grid,
  GridItem,
  Box,
  Container,
  Typography,
  Paper,
  AssignmentIndIcon,
  Avatar,
} from "@power-form-builder/ui-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { profile } from "../store/profileSlice";
import ChangePassword from "./ChangePassword";

type SignUpFormInputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const UserProfile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [changedPassword, setChangedPassword] = useState("default");

  const storedValue = localStorage.getItem("loginState");
  const retrievedObject = JSON.parse(storedValue!);

  const userData = {
    userId: retrievedObject.user.userId,
    firstname: retrievedObject.user.firstname,
    lastname: retrievedObject.user.lastname,
    email: retrievedObject.user.email,
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    defaultValues: retrievedObject.user,
  });

  const onSubmit = (data: SignUpFormInputs) => {
    try {
      console.log("started");
      console.log(changedPassword, "chnaged");
      let password;
      if (changedPassword === "") {
        password = "";
      } else {
        password = changedPassword;
      }
      const firstname = data.firstname;
      const lastname = data.lastname;
      const email = data.email;

      const userId = userData.userId;
      console.log({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      if (password === "default") {
        alert("Profile Updated Successfully");
        console.log("Oass", password);
        dispatch(profile({ userId, firstname, lastname, email }));
      } else {
        console.log("Oass", password);
        alert("Profile Updated Successfully");
        dispatch(profile({ userId, firstname, lastname, email, password }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 700,
    margin: "50px auto",
  };

  const handleChangePassword = () => {
    console.log("hello");
    console.log(!open);
    setOpen(!open);
  };

  const handleOpen = () => {
    console.log(!open);
    setOpen(!open);
    console.log(changedPassword);
  };

  const handleClose = () => {
    console.log(!open);
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <Paper elevation={5} style={paperStyle}>
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AssignmentIndIcon />
            </Avatar>
            <Typography variant="h5">Profile</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid spacing={2}>
                <GridItem xs={16} sm={8}>
                  <TextField
                    fullWidth
                    label="First Name"
                    //value={retrievedObject?.user?.firstname}
                    placeholder=""
                    {...register("firstname", {
                      required: "First Name is required",
                      maxLength: {
                        value: 15,
                        message: "First Name must be max 15 letters",
                      },
                      validate: (value) => {
                        return (
                          [/^[a-zA-Z/]*$/].every((pattern) =>
                            pattern.test(value)
                          ) || "Only letters are allowed"
                        );
                      },
                    })}
                    error={Boolean(errors.firstname)}
                    helperText={errors.firstname?.message}
                  />
                </GridItem>
                <GridItem xs={16} sm={8}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder=""
                    //value={retrievedObject?.user?.lastname}
                    {...register("lastname", {
                      required: "Last Name is required",
                      maxLength: {
                        value: 15,
                        message: "Last Name must be max 15 letters",
                      },
                      validate: (value) => {
                        return (
                          [/^[a-zA-Z/]*$/].every((pattern) =>
                            pattern.test(value)
                          ) || "Only letters are allowed"
                        );
                      },
                    })}
                    error={Boolean(errors.lastname)}
                    helperText={errors.lastname?.message}
                  />
                </GridItem>
                <GridItem xs={16}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    placeholder=""
                    //value={retrievedObject?.user?.email}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                </GridItem>
                <GridItem xs={16}>
                  <Button
                    size="large"
                    color="secondary"
                    sx={{ mt: 1, mb: 3 }}
                    type="button"
                    onClick={handleChangePassword}
                  >
                    Change Password
                  </Button>
                </GridItem>
              </Grid>

              <Button size="medium" color="success" fullWidth>
                Update Profile
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      {open ? (
        <ChangePassword
          setChangedPassword={setChangedPassword}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UserProfile;
