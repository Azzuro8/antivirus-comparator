import React, {useEffect, useContext} from "react";
import styles from "./styles.module.css";
import AppContext from "../../context/AppContext";
import ButtonAdd from '../ButtonAdd/ButtonAdd'

const AntivirusList = ({antiviruses}) => {

    const {chosen, setChosen} = useContext(AppContext);

    useEffect(() => {
        console.log("Initial chosen state:", chosen);
    }, []);

    const handleImageClick = (antivirus) => {

        console.log(
            "Clicked antivirus:", antivirus,
        );

        const isAlreadyChosen = chosen.some(content => content && content.name === antivirus.name)
        console.log("Antivirus already chosen:", antivirus);
        if (isAlreadyChosen) {
            return;
        }

        const updatedChosen = [...chosen]
        const emptyIndex = updatedChosen.findIndex(content => content === null)
        if (emptyIndex !== -1) {
            updatedChosen[emptyIndex] = antivirus
            console.log("New chosen array before setting state:", updatedChosen);
            setChosen(updatedChosen)
        }
    }


    useEffect(() => {
        console.log("Chosen state updated:", chosen);
    }, [chosen]);


    function handleRemoveClick(index) {
        console.log("Index Removed clicked:", index);
        const updatedChosen = [...chosen];
        updatedChosen[index] = null
        console.log('Updated chosen state after REMOVING', updatedChosen);
        setChosen(updatedChosen);
    }

    return (
        <div className={`container`}>
            <div className={`row bg-warning mb-lg-4 `}>
                {chosen.map((content, index) => (
                    <div key={index}
                         className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer}`}>
                        <div
                            className={`${content ? styles.imageWrapperExtendedFadeIn : styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}
                            onClick={() => content && handleRemoveClick(index)}
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
                ))}
            </div>
            <ButtonAdd/>
            <div className="row">
                {antiviruses.map((antivirus, index) => (
                    <div key={index}
                         className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer} bg-dark-subtle border `}>
                        <div
                            className={`${styles.imageWrapperExtended} bg-light border border-secondary rounded-3 shadow-sm`}
                            onClick={() => handleImageClick(antivirus)}
                        >
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




