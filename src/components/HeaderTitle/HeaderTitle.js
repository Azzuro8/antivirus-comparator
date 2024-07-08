import React from 'react';
import styles from './style.module.css';

const HeaderTitle = () => {
    return (
        <div className={styles.headerCenter}>
            <h1 className={styles.headerTitle}>
                <span className={styles.largeLetter}>P</span>ERFECT <span className={styles.largeLetter}>A</span>NTIVIRUS
            </h1>
        </div>
    );
};

export default HeaderTitle;
