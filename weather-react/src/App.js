import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  //main state
  // city = state, setCity = this.setState()
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const dataCheck = data => {
    //validate both field exist
    if (data.city === "" || data.country === "") {
      // a error
      return;
    }

    //city and country exist, add to the state
    setCity(data.city);
    setCountry(data.country);
  };

  return (
    <div className="App">
      <Header title="Weather React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form dataCheck={dataCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
