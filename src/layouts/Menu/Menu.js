import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/img/logo_white.jpg';
import AppContext from '../../context/AppContext';

const Menu = () => {

    const { chosen } = React.useContext(AppContext);
    const isDisabled = chosen.filter(item => item !== null).length < 2;

    return (
        <header className={`${styles.header} navbar navbar-expand-lg navbar-dark`}>
            <div className={`${styles.headerContainer} container`}>
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                <div className={styles.headerCenter}>
                    <h1 className={styles.headerTitle}>
                        <span className={styles.largeLetter}>P</span>ERFECT <span className={styles.largeLetter}>A</span>NTIVIRUS
                    </h1>
                </div>
                <button
                    className={`navbar-toggler ${styles.navbarToggler}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.navbarNav}`} id="navbarNav">
                    <ul className={`navbar-nav ms-auto`}>
                        <li className="nav-item">
                            <NavLink exact className={`nav-link ${styles.navLink}`} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink} ${isDisabled ? styles.disabledLink : ''}`} to="/compare">Compare</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Menu;
