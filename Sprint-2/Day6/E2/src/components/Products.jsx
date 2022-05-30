import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = () => {
  const [product, settingProduct] = useState([]);
  const [pages, setPages] = useState(1);
  const [num, setNum] = useState(0)
  const [lim, setl] = useState(3)
  useEffect(() => {
    showData()
  }, [pages,lim])

  const showData = () => {
    axios.get(`http://localhost:8080/products?_page=${pages}&_lim=${lim}`).then((response) => {
      settingProduct(response.data);
      setNum(response.headers["x-total-num"])
    })
  }


  return (
    <div>
      <AddProduct />
      <div>
        {product.map((product) => (<Product key={product.id} {...product} />))}
      </div>
      {/* Pagination */}
      <Pagination 
      pages={pages}
      setPages={setPages}
      num={num}
      setNum={setNum}
      lim={lim}
      setl={setl}
      />
    </div>
  );
};

export default Products;