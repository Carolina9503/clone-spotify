import React, { useState } from "react";
import styles from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search";
// import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";

import DehazeIcon from "@material-ui/icons/Dehaze";
import { TOGGLE_MENU } from "../../../reducers/features/toggle/toggleSlice";
import { SET_USER } from "../../../reducers/features/user/userSlice";
import { setToken } from "../../../utils/storage";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const handleHamburgerMenu = (openMenu) => {
    setOpenMenu((openMenu) => !openMenu);
    dispatch(TOGGLE_MENU(openMenu));
  };
  const handleCloseSections = () => {
    dispatch(SET_USER(null));
    setToken("");
  };

  return (
    <div className={styles.header}>
      <button
        className={styles.btn_menu}
        onClick={() => handleHamburgerMenu(openMenu)}
      >
        <DehazeIcon className={styles.dehazeIcon} />
      </button>

      <div className={styles.header__left}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          className={styles.header__left__input}
          placeholder="Artistas, canciones o pódcasts"
        />
      </div>
      <div className={styles.header__right}>
        <button
          className={styles.btn_img_user}
          onClick={() => setLogout((logout) => !logout)}
        >
          <img
            src="https://i.scdn.co/image/ab6775700000ee85b78f4b42ea660a2e83b1873c"
            alt="caro9503"
            className={styles.header__right__img}
          />
        </button>
      </div>
      <div
        className={logout ? styles.header_logout : styles.header_logout_close}
      >
        <ul>
          <li>Cuenta</li>
          <li>Perfil</li>
          <li onClick={handleCloseSections}>Cerrar sesión</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
