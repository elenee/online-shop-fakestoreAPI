import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import './Products.css';

const Products = ({selectedCategory}) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }
    axios
      .get(url)
      .then((result) => setAllProducts(result.data))
      .catch((err) => console.log("err"));
  }, [selectedCategory]);

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
