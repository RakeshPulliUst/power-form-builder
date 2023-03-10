import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  //TextField,
  Checkbox,
  Grid,
  GridItem,
  Box,
  Container,
  Typography,
  Link,
  MuiLockOutlinedIcon,
  Paper,
} from "@power-form-builder/ui-components";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, signin } from "./signinSlice";
import { RootState, store } from "./store";
import { useForm } from "react-hook-form";

type SignInFormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.userLogin
  );

  const onSubmit = async (data: SignInFormInputs) => {
    try {
      console.log("started");
      const email = data.email;
      const password = data.password;
      console.log({
        email: email,
        password: password,
      });
      dispatch(signin({ email, password }));
      console.log(user?.email, error);
    } catch (error) {
      console.error(error);
      alert("Enter Valid Details");
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("loginState");
    const retrievedObject = JSON.parse(storedValue!);
    if (retrievedObject.isAuthenticated) {
      const state = store.getState();
      localStorage.setItem("reduxState", JSON.stringify(state));
      navigate("/home");
    }
    console.log("Auth", { user, isAuthenticated, loading, error });
  }, [user, isAuthenticated, loading, error]);

  // if (isAuthenticated) {
  //   const state = store.getState();
  //   localStorage.setItem("reduxState", JSON.stringify(state));
  //   navigate("/home");
  // }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 450,
    margin: "50px auto",
  };

  return (
    <Container component="main" maxWidth="xs">
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
            <MuiLockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Email Address"
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
              sx={{ mt: 2 }}
            />

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
              sx={{ mt: 2 }}
            />

            <Button
              label="Sign In"
              color="primary"
              size="medium"
              fullWidth={true}
            />

            <Grid>
              <GridItem>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </GridItem>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
