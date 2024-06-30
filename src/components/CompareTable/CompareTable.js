import React from 'react';
import styles from './styles.module.css'

const CompareTable = ({ chosen }) => {
    // Filtrujemy wybrane antywirusy, aby sprawdzić, cos jest
    const nonEmptyChosen = chosen.filter(item => item !== null);

    // Pobieramy klucze obiektu z pierwszego wybranego antywirusa, jeśli istnieje
    const keys = nonEmptyChosen.length > 0 ? Object.keys(nonEmptyChosen[0]) : [];

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                <tr className="text-center">
                    <th scope="row"></th>
                    {nonEmptyChosen.map((_, index) => (
                        <th key={index}>{`Antywirus nr ${index + 1}`}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th scope="row"></th>
                    {nonEmptyChosen.map((content, index) => (
                        <td key={index}>
                            <div className={`bg-light border border-secondary rounded shadow-sm p-3 ${styles.imageWrapper}`}>
                                <img
                                    src={`/img/${content?.icon}`}
                                    alt={content?.name}
                                    title={content?.name}
                                    className="img-fluid"
                                />
                            </div>
                        </td>
                    ))}
                </tr>
                {keys.filter(key => key !== 'icon' && key !== `id`).map((key) => (
                    <tr key={key}>
                        <th scope="row">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        {nonEmptyChosen.map((content, index) => (
                            <td key={index}>{content[key]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompareTable;
