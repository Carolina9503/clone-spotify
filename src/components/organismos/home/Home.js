import React from "react";
import styles from "./Home.module.scss";
import Header from "../../moleculas/header/Header.js";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../../reducers/features/playList/playListSlice";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../../atomos/song-row/SongRow";
import { useHistory } from "react-router-dom";
import { selectFavorite } from "../../../reducers/features/favorite/favoriteSlice";
import toast, { Toaster } from "react-hot-toast";

const HomeScreen = () => {
  const playlist = useSelector(selectPlaylist);
  const favorite = useSelector(selectFavorite);
  const history = useHistory();

  return (
    <div className={styles.home__screen}>
      <Header />
      <Toaster />
      <div className={styles.home__screen__info}>
        <img
          className={styles.home__screen__img}
          src={playlist?.image}
          alt=""
        />
        <div className={styles.home__screen__infoText}>
          <h4>PLAYLISTS</h4>
          <button
            onClick={() => {
              toast.success("Exitoso");
              favorite.length > 0 && history.push("/favorites");
            }}
          >
            MI LISTA DE FAVORITOS
          </button>
          <h2>Discover Weekly</h2>
          <p>{playlist?.namePlayList}</p>
        </div>
        <div className={styles.home__screen__songs}>
          <div className={styles.home__screen__icons}>
            <PlayCircleFilledIcon className={styles.play__icon} />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon fontSize="large" />
          </div>
          <div className={styles.home__cards}>
            {playlist?.songs?.map((item, index) => (
              <SongRow
                track={item.track}
                favorite={item.isfavorite}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
