import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ButtonCompare = ({ chosen }) => {

    // Filtrujemy wybrane antywirusy, aby sprawdzić, czy są mniej niż 2 wybrane elementy
    const isDisabled = chosen.filter(item => item !== null).length < 2;

    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className="fa-solid fa-scale-unbalanced-flip"></i>;

    return (
        <div className="d-grid gap-2 col-4 mx-auto ">
            {isDisabled ? (
                <button
                    className={`${buttonClass} disabled`}
                    type="button"
                    disabled
                >
                    {icon} COMPARE
                </button>
            ) : (
                <Link to="/compare" className={buttonClass}>
                    {icon} COMPARE
                </Link>
            )}
        </div>
    );
};

export default ButtonCompare;




