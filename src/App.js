import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListAllCoupons from "./components/coupons/ListAllCoupons";
import AddCoupons from "./components/coupons/AddCoupons";
import Home from "./components/Home";
import ProtectedRoute from "react-protected-route-component";
import { useSelector } from "react-redux";
import SignUp from "./components/register/SignUp";
import SignIn from "./components/login/SignIn";

function App() {
  const user = useSelector((state) => state.reducers);
  console.log(user);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/get-stripe-coupons"
          redirectRoute="/signin-auth"
          guardFunction={() => {
            if (user.auth.authData == null) {
              return false;
            } else if (user.auth.authData.token) {
              return true;
            }
          }}
          component={ListAllCoupons}
        />
        <ProtectedRoute
          exact
          path="/create-stripe-coupons"
          redirectRoute="/signin-auth"
          guardFunction={() => {
            if (user.auth.authData == null) {
              return false;
            } else if (user.auth.authData.token) {
              return true;
            }
          }}
          component={AddCoupons}
        />
        <Route exact path="/signup-auth" component={SignUp} />
        <Route exact path="/signin-auth" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
