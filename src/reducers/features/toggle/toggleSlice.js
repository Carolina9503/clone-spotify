import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    openMenu: false,
  },
  reducers: {
    TOGGLE_MENU: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { TOGGLE_MENU } = toggleSlice.actions;
export const selectToggle = (state) => state.toggle.openMenu;
export default toggleSlice.reducer;
