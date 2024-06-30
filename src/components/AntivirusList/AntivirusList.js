import React from "react";
import styles from "./styles.module.css";



const AntivirusList = ({ antivirus, chosen, setChosen, index, }) => {

    const handleImageClick = () => {
        console.log(
            "Clicked antivirus:", antivirus,
        );

        const isAlreadyChosen = chosen.some(content => content && content.name === antivirus.name);
        console.log("Antivirus already chosen:", antivirus);
        if (isAlreadyChosen) {
            return;
        }

        const updatedChosen = [...chosen];
        const emptyIndex = updatedChosen.findIndex(content => content === null);
        if (emptyIndex !== -1) {
            updatedChosen[emptyIndex] = antivirus;
            console.log("New chosen array before setting state:", updatedChosen);
            setChosen(updatedChosen);

        }
    };

    return (
        <div
            className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer} bg-dark-subtle border `}>
            <div
                className={`${styles.imageWrapperExtended} bg-light border border-secondary rounded-3 shadow-sm`}
                onClick={handleImageClick}
            >
                <img
                    // src={`http://localhost:1111/img/${antivirus?.icon}`}
                    src={`/img/${antivirus?.icon}`}
                    alt={antivirus?.name}
                    title={antivirus?.name}
                    className={`${styles.logo} ${(index === 0 || index === 4) ? styles.logoSmaller : undefined}`}
                />
                <h3 className={styles.text_price}>{antivirus?.price} zł</h3>
            </div>
        </div>
    );
};

export default AntivirusList;
