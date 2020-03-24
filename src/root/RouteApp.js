import React from "react";
import Register from "../components/register";
import Login from "../components/Login";
import HomePage from "../components/index";
import PageProfile from "../components/profile";
import FormAddPost from "../components/FormAddPost";
import PrivateRoute from "../root/privateRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function RouteApp() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <PrivateRoute exact path={"/"} component={HomePage} />
          <PrivateRoute exact path={"/profile"} component={PageProfile} />
          <PrivateRoute exact path={"/add-post"} component={FormAddPost} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default RouteApp;
