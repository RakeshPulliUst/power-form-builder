import * as React from "react";
import { useRef } from "react";
import {
  Button,
  TextField,
  Grid,
  GridItem,
  Box,
  Container,
  Typography,
  Link,
  LockIcon,
  Paper,
  Avatar,
} from "@power-form-builder/ui-components";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/signinSlice";
import { RootState, store } from "../store/store";
import { useForm } from "react-hook-form";
import { FormRendererPlayGround } from "../form-renderer/FormRendererPlayGround";

type SignInFormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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
      if (inputRef.current) {
        inputRef.current.focus();
      }
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
  }, [user, isAuthenticated, loading, error, navigate]);

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
    <Container maxWidth="xs">
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
            <LockIcon />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={inputRef}
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
              inputRef={inputRef}
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

            <Button color="primary" size="medium" fullWidth={true}>
              Sign In
            </Button>

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
