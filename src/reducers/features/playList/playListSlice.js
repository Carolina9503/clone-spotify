import { createSlice } from "@reduxjs/toolkit";
export const playListSlice = createSlice({
  name: "playList",
  initialState: {
    playlist: {
      image: "",
      namePlayList: "",
      songs: [],
    },
  },
  reducers: {
    SET_PLAYLIST: (state, action) => {
      state.playlist = action.payload;
    },
    SET_ISFAVORITE: (state, action) => {
      state.playlist = {
        image: state.playlist.image,
        namePlayList: state.playlist.namePlayList,
        songs: state.playlist.songs?.map((song) =>
          song.track.id === action.payload.id
            ? { ...song, isfavorite: action.payload.isfavorite }
            : song
        ),
      };
    },
  },
});

export const { SET_PLAYLIST, SET_ISFAVORITE } = playListSlice.actions;
export const selectPlaylist = (state) => state.playlist.playlist;
export default playListSlice.reducer;
