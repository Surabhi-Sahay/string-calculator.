import React, { useState } from 'react';
import { add } from './utils/stringCalculator';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
      try {
          const sum = add(input);
          setResult(sum);
      } catch (error) {
          setResult((error as Error).message);
      }
  };

  return (
      <div style={{ padding: "20px" }}>
          <h1>String Calculator</h1>
          <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter numbers"
          />
          <button onClick={handleCalculate}>Calculate</button>
          <p>Result: {result}</p>
      </div>
  );
}

export default App;









