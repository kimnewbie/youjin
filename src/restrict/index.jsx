import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { setCookie } from "utils/cookie";

const RestrictedRoute = ({ component: Component, location }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default RestrictedRoute;
