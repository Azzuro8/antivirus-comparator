import React from 'react';
import styles from './styles.module.css';

const ButtonDifference = ({ onFindDifferences }) => {
    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className={`fa-brands fa-searchengin ${styles.buttonIcon}`}></i>;

    return (
        <div className="d-grid gap-2 col-4 mx-auto mb-lg-4">
            <button className={buttonClass} type="button" onClick={onFindDifferences}>
                {icon} <span className={styles.buttonText}>FIND DIFFERENCES</span>
            </button>
        </div>
    );
};

export default ButtonDifference;
