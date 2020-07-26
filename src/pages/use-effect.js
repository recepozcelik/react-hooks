import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffect() {
  const [count, setCount] = useState(11);
  const [count2, setCount2] = useState(22);
  const [post, setPost] = useState('');

  //this is work for every change
  useEffect(() => {
    console.log('Run every change on page');
  });

  //this is work for only one time when page is loading
  //So you can use for onload requests (axios)
  useEffect(() => {
    console.log('Run only when page is loading');

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
      console.log('Getting response with axios is successfully ended');
      setPost(JSON.stringify(res.data[0].title));
    })
    .catch(err => {
      console.log('Getting response with axios is failed');
    });
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
      <br></br>
      <p id='updateOnlyCount2Change'>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Increment Count2
      </button>
      <br></br>
      <p>Post: {post}</p>
    </div>
  );
}

export default UseEffect;