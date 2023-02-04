import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";
import iPhone from "../../images/iPhone.jpg";
import man from "../../images/man.jpg";
import ring from "../../images/jew.jpg";
import woman from "../../images/girl.jpg";

const Category = () => {
  const [productCategory, setProductCategory] = useState([]);
  const categoryIcons = [iPhone, ring, man, woman];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((result) => setProductCategory(result.data))
      .catch((err) => console.log("err"));
  }, []);
  return (
    <section className="category-section">
      <div className="categories container">
        {productCategory.map((product, index) => 
          <CategoryCard
            key={index}
            data={product}
            categoryIcons={categoryIcons}
            index={index}
          />
        )}
      </div>
    </section>
  );
};

export default Category;
