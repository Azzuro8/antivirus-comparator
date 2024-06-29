import React from 'react';
import styles from './styles.module.css';

const ButtonAdd = () => {
    return (
        <div>
            <button className={`${styles.btn} ${styles['btn-7']} ${styles['btn-icon-only']} ${styles['icon-plus']}`}>
                Add
            </button>
        </div>
    );
};

export default ButtonAdd;
