import React,{useState,useEffect, useContext} from "react";
import axios from 'axios'
import { CartContext } from "../../../context/CartContext";
const Product = () => {
  // Note: this id should come from api
const{removecart}=useContext(CartContext)

const {count}=useContext(CartContext)

const[data,setdata]=useState([]) 

const {cart} =useContext(CartContext)



  const [page,setpage]=useState(1)

  const [cuntr,setcount]=useState(1)

  const handleadd=()=>
  {

          setcount(cuntr+1)
  }
  const handlesub=()=>{
    setcount(cuntr-1)
}
  useEffect(()=>{
  
    const getdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products`);
      setdata(r.data)

    }

    getdata()
  },[page])
  const product = { id: 1 };
  return (
  
     
          <div>
      {data.map((data,index)=>(

     
    <div data-cy={`product-${product.id}`}>
     
      <h3 data-cy="product-name">{data.name}</h3>

      <h6 data-cy="product-description">{data.description}</h6>

      <button data-cy="product-add-item-to-cart-button" onClick={cart}>Add To Cart</button>

      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={handleadd}>+</button>

        <span data-cy="product-count">
          {
            // Count here from CartItems
            <button>{cuntr}</button>
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handlesub} disabled={cuntr===0}>-</button>

        <button data-cy="product-remove-cart-item-button" onClick={removecart} disabled={count===0}>Remove From Cart</button>
      </div>
    </div>
   
   ))}
 </div>
     
  );
};

export default Product;
