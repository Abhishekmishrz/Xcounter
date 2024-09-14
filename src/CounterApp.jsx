import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterApp;
