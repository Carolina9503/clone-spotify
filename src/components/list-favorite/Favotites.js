import React from "react";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../reducers/features/favorite/favoriteSlice";
import { selectPlaylist } from "../../reducers/features/playList/playListSlice";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Favorites.module.scss";

const Favotites = () => {
  const playlist = useSelector(selectPlaylist);
  const favorite = useSelector(selectFavorite);
  return (
    <>
      <div className={styles.favotites}>
        <Sidebar />
        <Header />
        <img
          className={styles.home__screen__img}
          src={playlist?.image}
          alt=""
        />
        <div>
          {favorite.map((item) => (
            <div>
              <img
                src={item.album.images[0].url}
                alt="album"
                className={styles.container__img}
              />
              <div className={styles.container__info}>
                <h4>{item.name}</h4>
                <p>{item.artists.map((artist) => artist.name).join(",")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favotites;
