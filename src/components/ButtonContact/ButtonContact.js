import React from 'react';
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const ButtonContact = () => {
    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className="fa-solid fa-envelope"></i>;

    return (
        <div className="d-grid gap-2 col-4 mx-auto mb-lg-4">

            <Link to="/contact" className={buttonClass}>
                {icon} CONTACT
            </Link>
        </div>
    );
};

export default ButtonContact;
