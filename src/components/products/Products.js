import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import './Products.css';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => setAllProducts(result.data))
      .catch((err) => console.log("err"));
  }, []);

  return (
    <section className="alldata-section">
      <div className="product-title">
        ALL PRODUCTS
      </div>
      <div className="products container">
        {allProducts.map((list, index) => (
          <ItemCard data={list} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
