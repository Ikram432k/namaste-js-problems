// Asterisk Field Validation
//problem statement link below
// https://namastedev.com/practice/asterisk-field-validation
import React, { useState } from 'react';
import "./styles.css";


function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errLocation, setErrLocation] = useState("");
  const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false);
  const submitForm = (e) => {
    e.preventDefault()
    validateForm();
    if (name && location) {
      setDisplaySuccessMsg(true);
    }
  }
  const validateForm = () => {
    if (!name && !name.length > 0) {
      setErrorName("Name is required.");
    }
    if (!location && !location.length > 0) {
      setErrLocation("Location is required.");
    }
  }
  const updateName = (e) => {
    if (e.target.value) {
      setDisplaySuccessMsg(false);
      setErrorName("");
      setName(e.target.value);
    }
  }
  const updateLocation = (e) => {
    if (e.target.value) {
      setDisplaySuccessMsg(false);
      setErrLocation("");
      setLocation(e.target.value);
    }
  }
  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form data-testid="form" className="form" onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            data-testid="name-input"
            id="name"
            onChange={updateName}
            className="input"
            type="text"
            placeholder="Enter your name"
          />
          {errorName && <p data-testid="name-error">{errorName}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            data-testid="location-input"
            id="location"
            onChange={updateLocation}
            className="input"
            type="text"
            placeholder="Enter your location"
          />
          {errLocation && <p data-testid="location-error">{errLocation}</p>}
        </div>

        <button data-testid="submit-button" type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {displaySuccessMsg &&
      <div data-testid="success-message">
        <p>Submitted Successfully!</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
      }
    </div>
  );
}

export default AsteriskFieldValidation;
