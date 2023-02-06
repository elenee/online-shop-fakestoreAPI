import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import "./App.css";
import { Suspense } from 'react';
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/online-shop-fakestoreAPI" element={<Home setSelectedCategory={setSelectedCategory}/>} />
          <Route path={`/${selectedCategory}`} element={<Products selectedCategory={selectedCategory}/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
