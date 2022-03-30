import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from "../components/atomos/auth/login/LoginScreen";
import Favotites from "../components/organismos/list-favorite/Favotites";
import SpotifyScreen from "../components/organismos/spotify/SpotifyScreen";
import { selectToken } from "../reducers/features/token/tokenSlice";
import { selectUser } from "../reducers/features/user/userSlice";
import AuthPrivateRouter from "./AuthPrivateRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";

const AppRouter = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={SpotifyScreen} />
          <Route path="/auth" component={AuthRouter} /> */}
          {user === null ? (
            // <PublicRoute
            //   path="/auth"
            //   component={AuthRouter}
            //   isAuthenticated={false}
            // />
            <>
              <Route exact path="/auth/login" component={LoginScreen} />
              <Redirect to="/auth/login" />
            </>
          ) : (
            // <PrivateRoute
            //   path="/"
            //   component={AuthPrivateRouter}
            //   isAuthenticated={true}
            // />
            <>
              <Route exact path="/" component={SpotifyScreen} />
              <Route exact path="/favorites" component={Favotites} />
              <Route component={SpotifyScreen} />
            </>
          )}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
