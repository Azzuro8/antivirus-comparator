import React from "react";
import styles from "./styles.module.css"

const AntivirusList = ({antiviruses}) => {
    return (
        <div className={styles.header}>
            {
                antiviruses.map((antivirus, index) => (
                    <div key={index} className={styles.headerContainer}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={`http://localhost:1111/img/${antivirus?.icon}`}
                                alt={antivirus?.name}
                                title={antivirus?.name}
                                className={styles.logo}
                            />
                            <h3 className={styles.text_price}>{antivirus?.price} zł</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AntivirusList;