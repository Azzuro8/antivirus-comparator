import React, {useContext, useEffect} from "react";
import AppContext from "../context/AppContext";
import CompareTable from "../components/CompareTable/CompareTable";


const ResultPage = () => {
    const context = useContext(AppContext);

    useEffect(() => {
        if (context.antiviruses && context.antiviruses.length === 0) {
            fetch(`${process.env.REACT_APP_API_URL_ANTIVIRUSES}/antiviruses`)
                .then((response) => response.json())
                .then((data) => {
                    context.setAntiviruses(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [context]);

    console.log(context.antiviruses);

    return (
        <div>
            <CompareTable
            chosen={context.chosen}
            />
        </div>
)
};

export default ResultPage;
