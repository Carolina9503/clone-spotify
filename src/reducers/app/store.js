import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import tokenReducer from "../features/token/tokenSlice";
import playlistReducer from "../features/playList/playListSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    playlist: playlistReducer,
    favorite: favoriteReducer,
  },
});
