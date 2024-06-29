import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import AntivirusChosen from '../AntivirusChosen/AntivirusChosen';
import AntivirusList from '../AntivirusList/AntivirusList';

const AntivirusView = ({ antiviruses }) => {
    const { chosen, setChosen } = useContext(AppContext);

    useEffect(() => {
        console.log("Initial chosen state:", chosen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Zachowaj pustą tablicę zależności

    useEffect(() => {
        console.log("Chosen state updated:", chosen);
    }, [chosen]);

    return (
        <div className={`container`}>
            <div className={`row bg-warning mb-lg-4`}>
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
            <ButtonAdd />
            <div className="row">
                {antiviruses.map((antivirus, index) => (
                    <AntivirusList
                        key={index}
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
