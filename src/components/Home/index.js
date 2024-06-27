
import React from "react";
import styles from "./styles.module.css";

const AntivirusList = ({antiviruses}) => {
    return (
        <div className={`container`}>
            <div className={`row`}>

            </div>
            <div className="row">
                {antiviruses.map((antivirus, index) => (
                    <div key={index} className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer} bg-dark-subtle border `}>
                        <div className={`${styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}>
                            <img
                                src={`http://localhost:1111/img/${antivirus?.icon}`}
                                alt={antivirus?.name}
                                title={antivirus?.name}
                                className={`${styles.logo}`}
                            />
                            <h3 className={`${styles.text_price}`}>{antivirus?.price} zł</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AntivirusList;
