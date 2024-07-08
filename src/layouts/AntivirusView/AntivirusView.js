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

            <div className={styles.sectionCompare}>
                <ButtonCompare chosen={chosen}/>
                <h2>How It Works <i className="fa-regular fa-circle-question"></i></h2>
                <h3>
                    <span className="fw-bold">1. Choose Your Antivirus:</span> <span
                    className="fw-normal">Select <b>two</b> or <b>three</b> antivirus programs you want to compare.</span>
                </h3>
                <h3>
                    <span className="fw-bold">2. Click Compare:</span> <span
                    className="fw-normal">Use the <b>COMPARE</b> button – your results will be saved in the COMPARE tab.</span>
                </h3>
                <h3>
                    <span className="fw-bold">3. Modify Your Selection:</span> <span className="fw-normal">You can always undo your choice or select a different antivirus.</span>
                </h3>
                <h4>
                    <em>Simple, fast, and effective!&nbsp; <i className="fas fa-dumbbell"></i></em>
                </h4>

            </div>

            <div className="row" style={{'--bs-gutter-x': '0'}}>
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
