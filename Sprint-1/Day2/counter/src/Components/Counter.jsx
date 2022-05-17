import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const[Count,setCount]=useState(0)
    
  return (
   <>
     <h1>Counter</h1>
     <div>{count}</div>
     <button onClick={()=>setCount(Count+1)}>+</button>
     <button onClick={()=>setCount(Count-1)}>-</button>
   </>

  )
  }
export default Counter