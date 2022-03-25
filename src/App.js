import AppRouter from "./routers/AppRouter";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";

import { SET_USER, selectUser } from "./reducers/features/user/userSlice";
import { SET_TOKEN } from "./reducers/features/token/tokenSlice";

import { SET_PLAYLIST } from "./reducers/features/playList/playListSlice";
import { getTokenFromUrl } from "./components/auth/login/logicLogin";

const spotify = new SpotifyWebApi();

function App() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
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
        });
      // .getPlaylist("2FqbB4n32EAp8xWiEPSslS")
      // .then((playlist) => console.log("Playlist en app", playlist));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
