import React, { useState } from 'react';
import styles from './styles.module.css';
import ButtonDifference from '../ButtonDifference/ButtonDifference';

const CompareTable = ({ chosen }) => {
    const [differences, setDifferences] = useState([]);

    const nonEmptyChosen = chosen.filter(item => item !== null);
    const keys = nonEmptyChosen.length > 0 ? Object.keys(nonEmptyChosen[0]) : [];

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
        <div className="container">
            <table className={`table table-striped table-bordered ${styles.table}`}>
                <thead>
                <tr className="text-center">
                    <th scope="row" className={styles.thFirst}>
                        <ButtonDifference chosen={chosen} onFindDifferences={findDifferences} />
                    </th>
                    {nonEmptyChosen.map((_, index) => (
                        <th key={index} className="col-lg-4 col-md-6 col-sm-12">{`Antywirus nr ${index + 1}`}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th scope="row" className=""></th>
                    {nonEmptyChosen.map((content, index) => (
                        <td key={index} className={`col-lg-4 col-md-6 col-sm-12 ${styles.headerContainer}`}>
                            <div className={`${styles.imageWrapper} bg-light border border-secondary rounded-3 shadow-sm`}>
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
                    <tr key={key} className={differences.includes(key) ? styles.differentRow : ''}>
                        <th scope="row" className="">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        {nonEmptyChosen.map((content, index) => (
                            <td key={index} className="text-center col-lg-4 col-md-6 col-sm-12">
                                {typeof content[key] === 'boolean' ? (
                                    content[key] ? (
                                        <i className={`fa-regular fa-circle-check ${styles.iconTrue}`}></i>
                                    ) : (
                                        <i className={`fa-regular fa-circle-xmark ${styles.iconFalse}`}></i>
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
    );
};

export default CompareTable;
