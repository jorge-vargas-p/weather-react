import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";

function App() {
  //main state
  // city = state, setCity = this.setState()
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);

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
  } else {
    //show error
    component = null;
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
