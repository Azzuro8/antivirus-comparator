import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const Home = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    if (context.antiviruses && context.antiviruses.length === 0) {
      fetch(`http://localhost:1112/antiviruses`)
        .then((response) => response.json())
        .then((data) => {
          context.setAntiviruses(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [context]);

  console.log(context.antiviruses);console.log(context.antiviruses);



  // let path
  // if (
  //     context.antiviruses && context.antiviruses.length > 0
  // ) {
  //     path = '../assets/img/'+context.antiviruses[0].icon;
  // }
  // let imagePath = [];
  // if (context.antiviruses && context.antiviruses.length > 0) {
  //     const firstAntivirus = context.antiviruses[0];
  //     imagePath = `http://localhost:1111/img/${firstAntivirus.icon}`;
  // }

  return (
    <>
      {context.antiviruses && context.antiviruses.length > 0 && (
        <div>
          {
            context.antiviruses.map((antivirus, index) => (
              <div key={index}>
                {antivirus?.price}
                <img
                  src={`http://localhost:1111/img/${antivirus?.icon}`}
                  alt={"path"}
                />
              </div>
            ))

            /*<img src={require('../assets/img/norton.png')} alt={'path'}/>*/
          }
        </div>
      )}
    </>
  );
};

export default Home;
