import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";
import iPhone from "../../images/iPhone.jpg";
import man from "../../images/man.jpg";
import ring from "../../images/jew.jpg";
import woman from "../../images/girl.jpg";
import { useNavigate } from "react-router-dom";

const Category = ({setSelectedCategory}) => {
  const [productCategory, setProductCategory] = useState([]);
  const categoryIcons = [iPhone, ring, man, woman];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((result) => setProductCategory(result.data))
      .catch((err) => console.log("err"));
  }, []);

  const navigate = useNavigate()
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/${category}`);
  };

  return (
    <section className="category-section" id="home">
      <div className="categories container">
        {productCategory.map((product, index) => 
          <CategoryCard
            key={index}
            data={product}
            categoryIcons={categoryIcons}
            index={index}
            onClick={() => handleCategorySelect(product)}
          />
        )}
      </div>
    </section>
  );
};

export default Category;
