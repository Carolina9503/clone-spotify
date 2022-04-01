import React from "react";
import styles from "./SongRow.module.scss";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useDispatch } from "react-redux";
import { isFavorite } from "../../../helpers/isFavorite";
// import toast, { Toaster } from "react-hot-toast";

const SongRow = ({ track, favorite }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img
        src={track.album.images[0].url}
        alt="album"
        className={styles.container__img}
      />
      <div className={styles.container__info}>
        <h4>{track.name}</h4>
        <p>{track.artists.map((artist) => artist.name).join(",")}</p>

        <button
          className={styles.btn__start}
          onClick={() => dispatch(isFavorite(track, favorite))}
        >
          <StarBorderIcon
            className={`${favorite ? styles.btn_yellow : styles.btn_white} ${
              styles.start__border
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SongRow;
