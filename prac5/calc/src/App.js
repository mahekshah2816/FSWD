import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    '/', '*', '+', '-', 'DEL',
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', '.', '='
  ];

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="display">
          <div className="result">({result || '0'})</div>
          <div className="expression">{expression || '0'}</div>
        </div>
        <div className="button-grid">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`btn ${['/', '*', '+', '-', 'DEL'].includes(btn) ? 'operator' : ''} ${btn === '=' ? 'equal' : ''}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
