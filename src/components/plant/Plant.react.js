import React from 'react';

const Plant = props =>
  <div className="plant panel-body">
    <img
      className={`plant_{props.plant['OBJECTID']}`}
      alt={`${props.plant['PhotoCredit01']}`}
      src={`http://placehold.it/300x200&text=plant${props.plant['OBJECTID']}`}
    />
    <h2>
      {props.plant['Common_Name']}
    </h2>
    <p>
      {props.plant['Plant_Type']}
    </p>
  </div>;

export default Plant;
