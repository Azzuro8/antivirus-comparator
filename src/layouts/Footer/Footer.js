import React from 'react';
import styles from './styles.module.css';
import ButtonContact from '../../components/ButtonContact/ButtonContact';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <h1>Want to learn more? Do you have any questions?</h1>
                <h2>Click below</h2>
                <ButtonContact />
            </div>
        </footer>
    );
};

export default Footer;
