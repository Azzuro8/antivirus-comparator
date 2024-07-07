import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import ButtonCompare from '../../components/ButtonCompare/ButtonCompare';
import AntivirusChosen from '../../components/AntivirusChosen/AntivirusChosen';
import AntivirusList from '../../components/AntivirusList/AntivirusList';
import styles from './styles.module.css';

const AntivirusView = ({ antiviruses }) => {
    const { chosen, setChosen } = useContext(AppContext);

    return (
        <div className={styles.sectionChosen}>
            <div className="row bg-warning" style={{ '--bs-gutter-x': '0' }}>
                {chosen.map((content, index) => (
                    <AntivirusChosen
                        key={index}
                        content={content}
                        index={index}
                        chosen={chosen}
                        setChosen={setChosen}
                    />
                ))}
            </div>

            <div className={`${styles.sectionCompare}`}>
                <ButtonCompare chosen={chosen} />
            </div>

            <div className="row" style={{ '--bs-gutter-x': '0' }}>
                {antiviruses.map((antivirus, index) => (
                    <AntivirusList
                        key={index}
                        index={index}
                        antivirus={antivirus}
                        chosen={chosen}
                        setChosen={setChosen}
                    />
                ))}
            </div>
        </div>
    );
};

export default AntivirusView;
