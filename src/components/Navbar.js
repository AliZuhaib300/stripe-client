// import React, { useReducer } from "react";
import React from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Avatar,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import * as actionType from "../constants/actionTypes.js";
import { useSelector } from "react-redux";
// import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
  header: {
    background: "#303030",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
  button: {
    color: "red",
    marginLeft: 600,
    textDecoration: "none",
    fontSize: 20,
  },
  login: {
    color: "blue",
    marginLeft: 20,
    textDecoration: "none",
    fontSize: 20,
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "70%",

    // flexDirection: "row-reverse",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  tr: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
    background: "#303030",
    "&:hover": {
      color: "#21CBF3",
    },
  },
  btn1: {
    background: "#303030",
    border: "2px solid #21CBF3",
    "&:hover": {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    color: "white",
    marginRight: "10px",
    width: "96.3px",
  },
  btn2: {
    background: "#303030",
    border: "2px solid #21CBF3",
    "&:hover": {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    color: "white",
  },
});

const NavBar = () => {
  const classes = useStyle();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.reducers);
  console.log(user);

  const history = useHistory();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tr} to="./" exact>
          HOME
        </NavLink>

        <ClickAwayListener>
          <NavLink className={classes.tr} to="/get-stripe-coupons" exact>
            COUPONS
          </NavLink>
        </ClickAwayListener>
        <NavLink className={classes.tr} to="/create-stripe-coupons" exact>
          CREATE COUPON
        </NavLink>
        <Toolbar className={classes.toolbar}>
          {user.auth.authData?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.auth.authData.result?.name}
                src={user.auth.authData.result?.imageUrl}
              >
                {user.auth.authData.result?.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.auth.authData.result?.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className={classes.btn1}
                component={Link}
                exact
                to="/signin-auth"
                variant="contained"
              >
                Login
              </Button>
              <Button
                className={classes.btn2}
                component={Link}
                exact
                to="/signup-auth"
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
