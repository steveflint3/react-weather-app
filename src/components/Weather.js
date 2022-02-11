import React from 'react';

const Weather = (props) => (
  // if(props.city === true && props.country === true) {
  //     return <p>props.location</p>
  //   }
  <div>
    <div>
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>Error: {props.error}</p>}
    </div>
  </div>
);

export default Weather;
