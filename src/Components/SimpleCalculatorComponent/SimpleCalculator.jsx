import React, { useState } from 'react';
import './SimpleCalculator.css'; 
function SimpleCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    setResult(num1 / num2);
  };

  return (
    <div className='container'>
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="input-group">
        <input type="text" inputMode="numeric" value={num1} onChange={handleNum1Change} />
        <input type="text" inputMode="numeric" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-group">
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
      </div>
      <p className="result">Result: {result}</p>
    </div>
    </div>

  );
}

export default SimpleCalculator;
