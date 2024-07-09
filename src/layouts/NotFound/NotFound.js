import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Page Not Found</p>
            <Link to="/" className={styles.homeLink}>Go Back Home</Link>
        </div>
    );
};

export default NotFound;
