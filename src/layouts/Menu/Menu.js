import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/img/logo_white.jpg';

const Menu = () => {
    return (
        <header className={`${styles.header} navbar navbar-expand-lg navbar-dark`}>
            <div className={`${styles.headerContainer} container`}>
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
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
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ms-auto`}>
                        <li className="nav-item">
                            <NavLink exact className={`nav-link ${styles.navLink}`} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/compare">Compare</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Menu;
