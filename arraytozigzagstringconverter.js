//problem https://namastedev.com/practice/array-to-zigzag-string-converter
//result 

import React, { useState } from 'react';

const ZigzagString = () => {
  const [stringVal, setStringVal] = useState('');
  const [responseVal, setResponseval] = useState('');
  const updateTheStrVal = (e) => {
      setStringVal(e.target.value)
  }
  const zigZagTheStr = () => {
    let arr = stringVal.split(',').map((ele)=>ele.trim());
    let reversedArr = arr.map((ele,index)=>{
        if(index%2!==0){
              return ele.split("").reduce((acc, char) => char + acc, "");
        }else{
            return ele
        }
    }).join('').trim();
    setResponseval(reversedArr)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        value={stringVal}
        onChange={updateTheStrVal}
      />
      <button onClick={zigZagTheStr}  data-testid="submit-button">
        Submit
      </button>
      <p data-testid="output-result">Output: {responseVal ? responseVal : null} </p>
    </div>
  );
};

export default ZigzagString;
