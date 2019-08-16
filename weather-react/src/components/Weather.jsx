import React from "react";

function Weather({ result }) {
  //extract value

  const { name, main } = result;

  if (!name) return null;

  //subtracting degrees Kelvin

  const kelvin = 273.15;

  return (
    <div className="card-panel orange lighten-3 col s12">
      <div className="black-text">
        <h2>The Weather In {name} is:</h2>
        <p className="temperature">
          {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
        </p>
        <p>Max Temperature : {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
        <p>Min Temperature : {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
      </div>
    </div>
  );
}

export default Weather;
