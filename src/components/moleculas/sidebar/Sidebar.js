import React from "react";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import styles from "./Sidebar.module.scss";
import SidebarItems from "./SidebarItems";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToggle } from "../../../reducers/features/toggle/toggleSlice";
import { selectFavorite } from "../../../reducers/features/favorite/favoriteSlice";
import toast from "react-hot-toast";

const Sidebar = () => {
  const history = useHistory();
  const openSidebar = useSelector(selectToggle);
  const favorite = useSelector(selectFavorite);
  return (
    <div
      className={`${styles.sidebar} ${
        openSidebar ? styles.openSidebar : styles.closeSidebar
      }`}
    >
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt=" Logo Spotify"
        onClick={() => {
          history.push("/");
        }}
      />
      <SidebarItems title="Home" Icon={HomeWorkIcon} />
      <SidebarItems title="Search" Icon={SearchIcon} />
      <SidebarItems title="Your Library" Icon={LibraryMusicIcon} />
      <div
        className={styles.sidebar_playlist}
        onClick={() => {
          favorite.length > 0
            ? history.push("/favorites")
            : toast.success("No tienes lista de favoritos");
        }}
      >
        FAVORITE PLAYLISTS
      </div>
      <hr />
      <SidebarItems title="Ed Sheeran" />
      <SidebarItems title="Breaking Benjamin" />
    </div>
  );
};

export default Sidebar;
