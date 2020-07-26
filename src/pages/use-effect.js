import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(11);
  const [count2, setCount2] = useState(22);

  //this is work for every change
  useEffect(() => {
    console.log('Run every change on page');
  });

  //this is work for only one time when page is loading
  useEffect(() => {
    console.log('Run only when page is loading');
  }, []);
  
  //this is work for only when count2 is change
  useEffect(() => {
    console.log('Run only count2 change');
  }, [count2]);

  return (
    <div className = "page">
      <p id='updateEveryRender'>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <p id='updateOnlyCount2Change'>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Increment Count2
      </button>
    </div>
  );
}

export default UseEffect;