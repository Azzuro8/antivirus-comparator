import React, {useState} from 'react';
import styles from './styles.module.css';
import ButtonDifference from '../ButtonDifference/ButtonDifference';

const CompareTable = ({chosen}) => {
    const [differences, setDifferences] = useState([]);

    const nonEmptyChosen = chosen.filter(item => item !== null);
    const keys = nonEmptyChosen.length > 0 ? Object.keys(nonEmptyChosen[0]) : [];

   //
    const insertSpaceBeforeCapital = (str) => {
        return str.replace(/([A-Z])/g, ' $1').trim();
    };


    const findDifferences = () => {
        const diffs = [];
        if (nonEmptyChosen.length > 1) {
            keys.forEach(key => {
                if (key !== 'icon' && key !== 'id') {
                    const firstValue = nonEmptyChosen[0][key];
                    const isDifferent = nonEmptyChosen.some(item => item[key] !== firstValue);
                    if (isDifferent) {
                        diffs.push(key);
                    }
                }
            });
        }
        console.log('Differences:', diffs);
        setDifferences(diffs);
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <ButtonDifference chosen={chosen} onFindDifferences={findDifferences}/>
                <table className={`table table-striped table-bordered ${styles.table}`}>
                    <thead>
                    <tr>
                        <th scope="row" className={`col-2 ${styles.thFirst}` } ></th>
                        {nonEmptyChosen.map((_, index) => (
                            <th key={index} className={`col-4 ${styles.description}`}>{`Antywirus nr ${index + 1}`}</th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th scope="row" className=""></th>
                        {nonEmptyChosen.map((content, index) => (
                            <td key={index} data-label={`Antywirus nr ${index + 1}`}>
                                <div
                                    className={`${styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}>
                                    <img
                                        src={`/img/${content?.icon}`}
                                        alt={content?.name}
                                        title={content?.name}
                                        className={`${styles.logo} ${(index === 0 || index === 4) ? styles.logoSmaller : undefined}`}
                                    />
                                </div>
                            </td>
                        ))}
                    </tr>
                    {keys.filter(key => key !== 'icon' && key !== 'id').map((key) => (
                        <tr key={key} className={differences.includes(key) && styles.differentRow}>
                            <th>{insertSpaceBeforeCapital(key.charAt(0).toUpperCase() + key.slice(1))}</th>
                            {nonEmptyChosen.map((content, index) => (
                                <td key={index}>
                                    {typeof content[key] === 'boolean' ? (
                                        content[key] ? (
                                            <i className={`fa-regular fa-circle-check ${styles.iconTrue} ${differences.includes(key) ? styles.underlinedIcon : ''}`}></i>
                                        ) : (
                                            <i className={`fa-regular fa-circle-xmark ${styles.iconFalse} ${differences.includes(key) ? styles.underlinedIcon : ''}`}></i>
                                        )
                                    ) : (
                                        content[key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompareTable;
