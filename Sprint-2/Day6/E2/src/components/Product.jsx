/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Product = ({ title, category, gender, imageSrc, price}) => {
  

  return (
    <div data-cy="product">
      <img data-cy="product-image" src={imageSrc}/>
      <p data-cy="product-category">{category}</p>
      <div>
        <p data-cy="product-gender">{gender}</p>
      </div>
      <p data-cy="product-title">{title}</p>
      <p data-cy="product-price">{price}</p>
    </div>
  );
};

export default Product;