import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  TextField,
  Checkbox,
  Grid,
  GridItem,
  Box,
  Container,
  Typography,
  Link,
  MuiLockOutlinedIcon,
} from "@power-form-builder/ui-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, signin } from "./signinSlice";
import { RootState, store } from "./store";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.userLogin
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    dispatch(signin({ email, password }));
    console.log(user?.email);
  };

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    console.log("Auth", { user, isAuthenticated, loading, error });
  }, [user, isAuthenticated, loading, error]);

  if (isAuthenticated) {
    const state = store.getState();
    localStorage.setItem("reduxState", JSON.stringify(state));
    navigate("/home");
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            fullWidth={true}
            required
            value={email}
            onChange={handleUsernameChange}
            type="email"
            name="email"
            sx={{ mt: 2 }}
          />

          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ mt: 2 }}
          />

          <Button
            label="Sign In"
            color="primary"
            size="medium"
            fullWidth={true}
          />

          <Grid>
            <GridItem xs={7}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </GridItem>
            <GridItem xs={9}>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
