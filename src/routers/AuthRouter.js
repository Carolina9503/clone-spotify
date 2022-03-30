import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import LoginScreen from "../components/atomos/auth/login/LoginScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};

export default AuthRouter;
