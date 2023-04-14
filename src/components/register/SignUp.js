import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./input";
import { signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";
import { validateUser } from "./validation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault(); //stop reload
    console.log(formData);
    dispatch(signup(formData, history));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Formik validationSchema={validateUser}>
      {/* {(formik) => ( */}
      {({ errors, touched }) => (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{"Sign Up"}</Typography>
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    utoFocus
                    half
                  />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                  <ErrorMessage name="firstName" />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                </>
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <ErrorMessage name="password" />
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                  error
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {"Sign Up"}
              </Button>
              <Button container justify="flex-end">
                <Grid item></Grid>
              </Button>
            </Form>
          </Paper>
        </Container>
      )}
    </Formik>
  );
};

export default SignUp;
