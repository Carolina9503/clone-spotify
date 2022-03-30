import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarItems = ({ title, Icon }) => {
  return (
    <div className={styles.sidebar_items}>
      {Icon && <Icon className={styles.icon} />}
      {Icon ? <h4>{title}</h4> : <h5>{title}</h5>}
    </div>
  );
};

export default SidebarItems;
