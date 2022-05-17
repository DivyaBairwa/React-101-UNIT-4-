import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const[Count,setCount]=useState(0)
    
  return (
   <div style={{marginLeft:"40%"}}>
     <h1>Counter</h1>
     <div>{Count}</div>
     <button onClick={()=>setCount(Count+1)}>+</button>
     <button onClick={()=>setCount(Count-1)}>-</button>
     <button onClick={()=>setCount(Count*2)}>double</button>
     


   </div>

  )
  }
export default Counter