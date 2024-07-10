import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import ButtonCompare from '../../components/ButtonCompare/ButtonCompare';
import AntivirusChosen from '../../components/AntivirusChosen/AntivirusChosen';
import AntivirusList from '../../components/AntivirusList/AntivirusList';
import styles from './styles.module.css';
import Instruction from "../../components/Instruction/Instruction";

const AntivirusView = ({ antiviruses }) => {
    const { chosen, setChosen } = useContext(AppContext);

    return (
        <div className={styles.header}>
            <div className={`bg-warning ${styles.headerChosen}`}  >
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

            <div className={styles.headerCompare}>
                <ButtonCompare chosen={chosen}/>
                <Instruction/>
            </div>

            <div className={styles.headerList} >
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
