import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import tokenReducer from "../features/token/tokenSlice";
import playlistReducer from "../features/playList/playListSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";
import toggleReducer from "../features/toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    playlist: playlistReducer,
    favorite: favoriteReducer,
    toggle: toggleReducer,
  },
});
