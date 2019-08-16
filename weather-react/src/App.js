import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  //main state
  // city = state, setCity = this.setState()
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(
    () => {
      //prevent execution
      if (city === "") return;

      const askAPI = async () => {
        const appId = "d143ecbdfc3f4000d5429d3a7aed83e3";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        // asking URL
        const answer = await fetch(url);
        const result = await answer.json();

        setResult(result);
      };

      askAPI();
    },
    [city, country]
  );

  const dataCheck = data => {
    //validate both field exist
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    //city and country exist, add to the state
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  // loading a conditional component

  let component;
  if (error) {
    // exist a error, show
    component = <Error message="Both field are required" />;
  } else if (result.cod === "404") {
    component = <Error message="The city does not exist in our records" />;
  } else {
    //show Weather
    component = <Weather result={result} />;
  }

  return (
    <div className="App">
      <Header title="Weather React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form dataCheck={dataCheck} />
            </div>
            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
