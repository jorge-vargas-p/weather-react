import React, { useState } from "react";

function Form({ dataCheck }) {
  // component state
  const [serch, saveSerch] = useState({
    city: "",
    country: ""
  });

  const handleChange = e => {
    //change state
    saveSerch({
      ...serch,
      [e.target.name]: e.target.value
    });
    console.log(serch);
  };

  const checkWeather = e => {
    e.preventDefault();

    // Giving to the main component the user serch
    dataCheck(serch);
  };

  return (
    <form onSubmit={checkWeather}>
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name="country">
          <option value="">Select a country</option>
          <option value="NZ">New Zealand</option>
          <option value="CL">Chile</option>
          <option value="US">United States of America</option>
          <option value="AU">Australia</option>
          <option value="BR">Brazil</option>
          <option value="SA">Saudi Arabia</option>
          <option value="LV">Latvia</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large
                btn-block yellow accent-4"
          value="Serch Weather"
        />
      </div>
    </form>
  );
}

export default Form;
