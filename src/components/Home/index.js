import React, {useState} from "react";
import styles from "./styles.module.css";

const AntivirusList = ({antiviruses}) => {

    const [chosen, setChosen] = useState([null, null, null])

    const handleImageClick = (antivirus) => {

        const isAlreadyChosen = chosen.some(content => content && content.name === antivirus.name)
        if (isAlreadyChosen) {
            return;
        }

        const newChosen = [...chosen]
        const emptyIndex = newChosen.findIndex(content => content === null)
        if (emptyIndex !== -1) {
            newChosen[emptyIndex] = antivirus
            setChosen(newChosen)
        }
    }

    // function handleImageClick(antivirus, index) {
    //     setChosen(prevChosen => {
    //         const newHeaderContent = [...prevChosen];
    //         newHeaderContent[index] = antivirus;
    //         return newHeaderContent;
    //     });
    // }



    return (
        <div className={`container`}>
            <div className={`row bg-warning mb-lg-4 `}>
                {chosen.map((content, index) => (
                    <div key={index} className={`col-lg-4 col-md-12 d-flex justify-content-center ${styles.headerContainer}`}>
                        <div className={`${content ? styles.imageWrapperExtended : styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}>
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
