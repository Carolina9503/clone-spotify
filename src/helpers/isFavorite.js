import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "../reducers/features/favorite/favoriteSlice";
import { SET_ISFAVORITE } from "../reducers/features/playList/playListSlice";

export const isFavorite = (dataSong, favorite) => {
  return async (dispatch) => {
    if (favorite === undefined || favorite === false) {
      dispatch(SET_ISFAVORITE({ id: dataSong.id, isfavorite: true }));
      const dataFavorites = {
        id: dataSong.id,
        image: dataSong.album.images[0].url,
        name: dataSong.name,
        artistas: dataSong.artists.map((artist) => artist.name).join(","),
      };
      dispatch(ADD_FAVORITE(dataFavorites));
    } else {
      dispatch(SET_ISFAVORITE({ id: dataSong.id, isfavorite: !favorite }));
      dispatch(DELETE_FAVORITE({ id: dataSong.id }));
    }
  };
};
