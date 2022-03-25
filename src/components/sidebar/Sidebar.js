import React from "react";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import styles from "./Sidebar.module.scss";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt=" Logo Spotify"
      />
      <SidebarItems title="Home" Icon={HomeWorkIcon} />
      <SidebarItems title="Search" Icon={SearchIcon} />
      <SidebarItems title="Your Library" Icon={LibraryMusicIcon} />
      <div className={styles.sidebar_playlist}>PLAYLISTS</div>
      <hr />
      <SidebarItems title="Ed Sheeran" />
      <SidebarItems title="Breaking Benjamin" />
    </div>
  );
};

export default Sidebar;
