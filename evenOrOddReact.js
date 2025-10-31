// Even or odd
// https://namastedev.com/practice/even-or-odd
import React, { useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {
  const [inputVal, setInputVal] = useState(0);
  const [updateInput, setUpdateInput] = useState("");
  const [displayNum, setDisplayNum] = useState(false);
  const [loading, setLoading] = useState(false);
  const saveNum = (e) => {
    setDisplayNum(false)
    const value = e.target.value;
    const numericValue = +value; // Converts string to number

    setInputVal(numericValue)

  }
  const checkIfNumber = () => {
    console.log("inputVal", !isNaN(inputVal) )
    if (inputVal == 0 || isNaN(inputVal)) {
      setDisplayNum(true)
      setUpdateInput("Please enter a valid number.");
      return
    }
    else if (inputVal % 2 === 0) {
      setLoading(true)
      setUpdateInput("Checking...");
      const timer = setTimeout(() => {
        setLoading(false)
        setDisplayNum(true)
        setUpdateInput(`The number ${inputVal} is even.`);
      }, 1000); // 1000 milliseconds = 1 second
      return () => clearTimeout(timer); // Clear timeout on unmount
    } else {
      setLoading(true)
      setUpdateInput("Checking...");
      const timer = setTimeout(() => {
        setLoading(false)
        setDisplayNum(true)
        setUpdateInput(`The number ${inputVal} is odd.`);
      }, 1000); // 1000 milliseconds = 1 second
      return () => clearTimeout(timer); // Clear timeout on unmount

    }
  }
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        data-testid="number-input"
        className="number-input"
        type="text"
        placeholder="Enter a number"
        onChange={saveNum}
      />

      <button data-testid="check-button" onClick={checkIfNumber} className="check-button">Check</button>

      <div className="result-area">
        {loading ? <p className="loading">Checking...</p> :         <div className="result" data-testid="result">{displayNum ? 
          updateInput : "Result appears here"
        }</div>}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
