import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [data,setdata]=useState(0);
    const Increment = () => {
        setdata(data + 1);
      };
  return (
    <div>
        <h4>Counter App</h4>
        <h1 className='mx-3'>{data}</h1>
      <button className='btn btn-success mx-3'onClick={Increment}>increment</button>
    </div>
  )
}

export default Counter;
