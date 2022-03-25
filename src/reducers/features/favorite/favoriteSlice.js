import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    DELETE_FAVORITE: (state, action) => {
      state.favorite = state.favorite.filter(
        (song) => song.id !== action.payload.id
      );
    },
    ADD_FAVORITE: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
  },
});

export const { DELETE_FAVORITE, ADD_FAVORITE } = favoriteSlice.actions;
export const selectFavorite = (state) => state.favorite.favorite;
export default favoriteSlice.reducer;
