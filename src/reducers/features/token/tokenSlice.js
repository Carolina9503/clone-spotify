import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken } from "../../../utils/storage";

const initialState = getToken();
export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: initialState,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      const newState = action.payload;
      setToken(newState);
      state.token = newState;
    },
  },
});

export const { SET_TOKEN } = tokenSlice.actions;
export const selectToken = (state) => state.token.token;
export default tokenSlice.reducer;
