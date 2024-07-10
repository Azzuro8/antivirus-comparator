import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import AntivirusView from "../layouts/AntivirusView/AntivirusView";

const HomePage = () => {
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

  return (
    <div>
      {context.antiviruses && context.antiviruses.length > 0 && (
        <AntivirusView antiviruses={context.antiviruses} />
      )}
    </div>
  );
};

export default HomePage;
