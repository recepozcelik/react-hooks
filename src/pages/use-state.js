import React, { useState } from 'react';

function UseState() {
  // Declare a new state variable 
  // use this variable and set method of this variable everyhere in page
  const [count, setCount] = useState(100);

  const decrementCount = () =>{
      setCount(prevCount => prevCount - 1);
  }

  return (
    <div className = "page">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  );
}

export default UseState;