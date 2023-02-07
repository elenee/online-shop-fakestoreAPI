import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemModal from "../item-modal/ItemModal";
import ItemCard from "./ItemCard";
import "./Products.css";

const Products = ({ selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

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
    <section className="alldata-section" id="products">
      <div className='product-title'>
      {selectedCategory && (
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      )}
        {selectedCategory ? `${selectedCategory}` : "All Products"}
      </div>
      <div className="products container">
        {allProducts.map((list, index) => (
          <ItemModal data={list} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
