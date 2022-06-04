import React from "react";
import db from '../db.json'
import CartButton from "./CartButton";
import ProductItem from './ProductItem'

function Products() {
  console.log(db);
  
  return (
    <>
      <h1 className="head">Products</h1>
      <div className="container">
        {db.map((item) => (
          <div>
            <ProductItem item={item} />
            <CartButton />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;

// `http://localhost:3000/data`
