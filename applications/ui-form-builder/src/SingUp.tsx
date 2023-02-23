import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./types";
import {
  Button,
  TextField,
  Grid,
  GridItem,
  Box,
  Container,
  Typography,
  Link,
  MuiLockOutlinedIcon,
} from "@power-form-builder/ui-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "./signupSlice";

interface SignUpProps extends PropsFromRedux {}

const SignUp: React.FC<SignUpProps> = ({ loading, error, signup }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLastname(event.target.value);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/");
    dispatch(signup({ firstname, lastname, email, password }));
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid spacing={2}>
            <GridItem xs={16} sm={8}>
              <TextField
                name="firstname"
                required
                fullWidth
                label="First Name"
                onChange={handleFirstnameChange}
              />
            </GridItem>
            <GridItem xs={16} sm={8}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastname"
                onChange={handleLastnameChange}
              />
            </GridItem>
            <GridItem xs={16}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                onChange={handleUsernameChange}
              />
            </GridItem>
            <GridItem xs={16}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
              />
            </GridItem>
          </Grid>

          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              label="Sign up"
              size="medium"
              color="primary"
              fullWidth
            ></Button>
          )}
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Grid>
            <GridItem>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
const mapStateToProps = (state: RootState) => ({
  user: state.user ? state.user : null,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  signup,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SignUp);
