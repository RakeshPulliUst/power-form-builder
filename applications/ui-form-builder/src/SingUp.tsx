import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./types";
import {
  Button,
  //TextField,
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
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "./signupSlice";
import { useForm } from "react-hook-form";

interface SignUpProps extends PropsFromRedux {}

type SignUpFormInputs = {
  userId: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

let generatedNumbers: number[] = [];

function generatedUniqueInt(max: number) {
  let uniqueInt = Math.floor(Math.random() * max);
  while (generatedNumbers.includes(uniqueInt)) {
    uniqueInt = Math.floor(Math.random() * max);
  }
  generatedNumbers.push(uniqueInt);
  return uniqueInt;
}

const SignUp: React.FC<SignUpProps> = ({ loading, error, signup }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit = (data: SignUpFormInputs) => {
    try {
      console.log("started");
      const userId = generatedUniqueInt(1000);
      const firstname = data.firstname;
      const lastname = data.lastname;
      const email = data.email;
      const password = data.password;
      console.log({
        userId: userId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      navigate("/");
      dispatch(signup({ userId, firstname, lastname, email, password }));
    } catch (error) {
      console.error(error);
    }
  };

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
            Sign up
          </Typography>
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
      </Paper>
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
