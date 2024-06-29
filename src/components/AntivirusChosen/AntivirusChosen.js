import React from "react";
import styles from "./styles.module.css";

const AntivirusChosen = ({ content, index, chosen, setChosen }) => {
    const handleRemoveClick = () => {
        console.log("Index Removed clicked:", index);
        const updatedChosen = [...chosen];
        updatedChosen[index] = null;
        console.log('Updated chosen state after REMOVING', updatedChosen);
        setChosen(updatedChosen);

    };

    return (
        <div className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer}`}>
            <div
                className={`${content ? styles.imageWrapperExtendedFadeIn : styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}
                onClick={handleRemoveClick}
            >
                {content && (
                    <>
                        <img
                            src={`http://localhost:1111/img/${content?.icon}`}
                            alt={content?.name}
                            title={content?.name}
                            className={`${styles.logo}`}
                        />
                        <h3 className={`${styles.text_price}`}>{content?.price} zł</h3>
                    </>
                )}
            </div>
        </div>
    );
};

export default AntivirusChosen;
