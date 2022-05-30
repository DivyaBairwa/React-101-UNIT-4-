import axios from "axios";
import React, { useState } from "react";

const init = {
  title: "",
  category: "",
  gender: "",
  imageSrc: "",
  price: ""
} 

const AddProduct = () => {
  const [mainData, setMainData] = useState(init);
  const { title, category, gender, imageSrc, price } = mainData;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setMainData({
      ...mainData,
      [name]: value,
    })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(mainData);
    axios.post("http://localhost:8080/products", mainData).then(() => {
      alert("Succesful");
      setMainData({
        title: "",
        category: "",
        gender: "",
        imageSrc: "",
        price: ""
      })
    })
  }

  return (
    <>
      <button my={5} data-cy="add-product-button">Add New Product</button>
      <div>
        <form pb={6} onSubmit={submit}>
          <label>Title</label>
          <input data-cy="add-product-title" value={title} onChange={handleChange} type="text" name="title" />
          <select data-cy="add-product-category" value={category} onChange={handleChange} name="category">
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </select>
          <div data-cy="add-product-gender">
            <input type="radio" data-cy="add-product-gender-male" name="gender" value="male" onChange={handleChange} />
            <label>Male</label>
            <input type="radio" data-cy="add-product-gender-female" name="gender" value="female" onChange={handleChange} />
            <label>Female</label>
            <input type="radio" data-cy="add-product-gender-unisex" name="gender" value="unisex" onChange={handleChange} />
            <label>Unisex</label>
          </div>
          <label>price</label>
          <input data-cy="add-product-price" value={price} onChange={handleChange} type="text" name="price" />
          <label>Image</label>
          <input type="text" value={imageSrc} name="imageSrc" onChange={handleChange} />
          <button data-cy="add-product-submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;