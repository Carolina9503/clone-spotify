import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../components/atomos/auth/login/logicLogin";
import LoginScreen from "../components/atomos/auth/login/LoginScreen";
import { SET_PLAYLIST } from "../reducers/features/playList/playListSlice";
import { selectToken, SET_TOKEN } from "../reducers/features/token/tokenSlice";
import { selectUser, SET_USER } from "../reducers/features/user/userSlice";
import AuthPrivateRouter from "./AuthPrivateRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";
const spotify = new SpotifyWebApi();

const AppRouter = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const tokenLocal = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token || tokenLocal) {
      console.log("entro Aqui");
      dispatch(SET_TOKEN(_token || tokenLocal));
      spotify.setAccessToken(_token || tokenLocal);
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
      spotify
        .getPlaylist("2FqbB4n32EAp8xWiEPSslS")
        .then(({ images, name, tracks: { items } }) => {
          const payload = {
            image: images[0].url,
            namePlayList: name,
            songs: items,
          };
          dispatch(SET_PLAYLIST(payload));
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    window.location.hash = "";
  }, [dispatch, tokenLocal]);
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          {user ? (
            <PrivateRoute
              path="/"
              component={AuthPrivateRouter}
              isAuthenticated={true}
            />
          ) : (
            <PublicRoute
              path="/auth"
              component={AuthRouter}
              isAuthenticated={false}
            />
          )}
          <Route component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
