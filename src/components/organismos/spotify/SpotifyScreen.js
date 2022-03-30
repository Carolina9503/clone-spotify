import React from "react";
import { useSelector } from "react-redux";
import { selectToggle } from "../../../reducers/features/toggle/toggleSlice";
import Footer from "../../atomos/footer/Footer";
import Home from "../home/Home";
import Sidebar from "../../moleculas/sidebar/Sidebar";
import styles from "./SpotifyScreen.module.scss";

const SpotifyScreen = () => {
  const toggleMenu = useSelector(selectToggle);
  return (
    <>
      <div className={styles.spotify__body}>
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default SpotifyScreen;
