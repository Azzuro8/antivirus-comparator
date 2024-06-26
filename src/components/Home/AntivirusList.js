import React from "react";

const AntivirusList = ({ antiviruses }) => {
  return (
    <div>
      {
        antiviruses.map((antivirus, index) => (
          <div key={index}>
            {antivirus?.price}
            <img
              src={`http://localhost:1111/img/${antivirus?.icon}`}
              alt={antivirus?.name}
            />
          </div>
        ))

        /*<img src={require('../assets/img/norton.png')} alt={'path'}/>*/
      }
    </div>
  );
};

export default AntivirusList;
