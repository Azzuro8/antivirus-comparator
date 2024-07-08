import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Swal from 'sweetalert2';

const ButtonCompare = ({ chosen }) => {

    // Filtrujemy wybrane antywirusy, aby sprawdzić, czy są mniej niż 2 wybrane elementy
    const isDisabled = chosen.filter(item => item !== null).length < 2;

    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className="fa-solid fa-scale-unbalanced-flip"></i>;

    const handleCompareClick = (event) => {

        if (isDisabled) {
            event.preventDefault();
            Swal.fire({
                icon: 'warning',
                title: 'Wybierz co najmniej dwa antywirusy do porównania',
                showConfirmButton: true,
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="d-grid gap-2 col-4 mx-auto "
             onClick={handleCompareClick}
        >
            {isDisabled ? (
                <button
                    className={`${buttonClass} disabled`}
                    type="button"

                >
                    {icon} COMPARE
                </button>
            ) : (
                <Link to="/result" className={buttonClass} >
                    {icon} COMPARE
                </Link>
            )}
        </div>
    );
};

export default ButtonCompare;




