import React from 'react';
import styles from './styles.module.css';

const ButtonDifference = ({ onFindDifferences }) => {
    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className="fa-brands fa-searchengin"></i>;

    return (
        <div className="d-grid gap-2">
            <button className={buttonClass} type="button" onClick={onFindDifferences}>
                {icon} FIND DIFFERENCES
            </button>
        </div>
    );
};

export default ButtonDifference;
