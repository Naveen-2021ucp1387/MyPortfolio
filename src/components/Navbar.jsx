import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="#">Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Projects</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">More</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
