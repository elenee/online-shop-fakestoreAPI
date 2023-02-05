import { useState } from 'react';
import './App.css';
import Category from './components/categories/Category';
import Cover from './components/cover/Cover';
import Header from './components/header/Header';
import Products from './components/products/Products';
import './styles/ant-drawer.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  return (
    <div className="App">
      <Header />
      <Cover />
      <Category setSelectedCategory={setSelectedCategory}/>
      <Products selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;