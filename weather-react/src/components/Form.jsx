import React from 'react';

function Form(){

    const handleChange = e => {
        //change state
    }

    return(
        <form>
            <div className="input-field col s12">
                <input
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
                />
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
                    <option value="AQ">Antarctica</option>
                    <option value="ES">Spain</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large
                btn-block yellow accent-4" value="Serch Weather"/>
            </div>
        </form>
    )
}

export default Form