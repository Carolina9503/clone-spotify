import React from "react";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Sidebar from "../sidebar/Sidebar";
import styles from "./SpotifyScreen.module.scss";

const SpotifyScreen = () => {
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
