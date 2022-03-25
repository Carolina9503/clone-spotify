import React from "react";
import styles from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../reducers/features/user/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          className={styles.header__left__input}
          placeholder="Artistas, canciones o pódcasts"
        />
      </div>
      <div className={styles.header__right}>
        {/* <img
          src="https://i.scdn.co/image/ab6775700000ee85b78f4b42ea660a2e83b1873c"
          alt="caro9503"
          className={styles.header__right__img}
        /> */}
        <Avatar />
        {/* <h4>{user.display_name}</h4> */}
      </div>
    </div>
  );
};

export default Header;
