import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Favotites from "../components/organismos/list-favorite/Favotites";
import SpotifyScreen from "../components/organismos/spotify/SpotifyScreen";

const AuthPrivateRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SpotifyScreen} />
        <Route exact path="/favorites" component={Favotites} />
        <Route component={SpotifyScreen} />
      </Switch>
    </>
  );
};

export default AuthPrivateRouter;
