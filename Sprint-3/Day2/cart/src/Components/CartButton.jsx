

// export default CartButton
import React from 'react';
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount]=React.useState(0)
    const handleCount= (value) => {
      setCount(count+value)
    }
    const handleBtn=()=> {
      setCount(1)
    }
  
  
  
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
     {count===0?<button className="addcart" onClick={handleBtn}>Add to Cart</button>:
     (<div className="btn-div"><button className="btn" onClick={()=>handleCount(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button className="btn" onClick={()=>handleCount(1)}>+</button></div>)}
  </div>
  </>;
};
export default CartButton
