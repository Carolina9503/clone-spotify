import React from "react";
import { loginURL } from "./logicLogin";
import styles from "./LoginScreen.module.scss";

const LoginScreen = () => {
  return (
    <div className={styles.container}>
      <img
        src="http://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="Logo Spotify"
        className={styles.logo}
      ></img>
      <a className={styles.container_a} href={loginURL}>
        Login with spotify
      </a>
    </div>
  );
};

export default LoginScreen;
