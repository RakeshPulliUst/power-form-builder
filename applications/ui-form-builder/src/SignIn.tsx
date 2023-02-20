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

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./signinSlice";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    dispatch(login({ username, password }));
  };

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

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
            value={username}
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
}
