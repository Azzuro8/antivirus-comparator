import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/img/logoPA.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={logo} alt={"logo"} className={styles.logo} />
        <nav>
          <Link to="/">Home</Link>
          <Link to={"/compare"}>Compare</Link>
          <Link to={"/soft"}>Soft</Link>
          <Link to={"/user"}>User</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
