// Age calculator
// https://namastedev.com/practice/age-calculator
import React, { useState } from 'react';

function AgeCalculator() {
  const [selectedDate, setSelectedDate] = useState('');
  const today = new Date();
  const hanldeChangedate = (event) => {
    setSelectedDate(event.target.value);
    console.log(event.target.value)
  }
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState("");
  const calculateAge = () => {
    let birthDate = new Date(selectedDate);
    if (!selectedDate) {
      setErrorMsg("Please select a date");
      return 
    }
    if (birthDate.getTime() > today.getTime()) {
      setErrorMsg("Birthdate cannot be in the future");
      return 
    }
    setErrorMsg('')
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }
    setResult(`${years} years, ${months} months, ${days} days`)
  }
  return (
    <div className="conatiner">
      <h2 className="title"></h2>
      <label data-testid="label-birthdate" className="label">Enter/Select a birthdate:</label>
      <input data-testid="input-birthdate" id="birthdate" type="date" className="input-date"
      value = {selectedDate}
      onChange={hanldeChangedate}
      />
      <button data-testid="btn-calculate" className="btn-calc" onClick={calculateAge}>Calculate Age</button>
      {errorMsg ? <p data-testid="error-msg" className="error-msg">{errorMsg}</p> : null}
      {result ?
      <p data-testid="age-result" className="age-result">{result}</p> : null}
    </div>
  );
}

export default AgeCalculator;
