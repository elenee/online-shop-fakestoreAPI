import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar"
import Home from "./pages/Home";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/online-shop-fakestoreAPI"
          element={<Home setSelectedCategory={setSelectedCategory} />}
        />
        <Route
          path={`/${selectedCategory}`}
          element={<Products selectedCategory={selectedCategory} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
