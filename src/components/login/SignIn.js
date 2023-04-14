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
import { signin } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { auth } from "../../reducer/index";
// console.log(auth);

const initialValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();
  const history = useHistory();
  // const { authData } = useReducer();
  // console.log(authData);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault(); //stop reload
    console.log(formData);
    dispatch(signin(formData, history));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{"Sign In"}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {"Sign In"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
export default SignIn;
