import React from "react";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../reducers/features/favorite/favoriteSlice";
import Footer from "../../atomos/footer/Footer";
import Header from "../../moleculas/header/Header";
import Sidebar from "../../moleculas/sidebar/Sidebar";
import styles from "./Favorites.module.scss";

const Favotites = () => {
  const favorite = useSelector(selectFavorite);
  console.log(favorite);
  return (
    <div className={styles.favotite}>
      <Sidebar />
      <div className={styles.favorite_container}>
        <Header />
        <div className={styles.card}>
          {favorite.map((item, index) => (
            <div key={index} className={styles.favorite_card}>
              <img
                src={item.image}
                alt="Imagen del artista"
                className={styles.favorite_img}
              />
              <div className={styles.container__info}>
                <h4>{item.name}</h4>
                <p>{item.artistas}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Favotites;
