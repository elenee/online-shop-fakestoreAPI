import './App.css';
import Category from './components/categories/Category';
import Cover from './components/cover/Cover';
import Header from './components/header/Header';
import Products from './components/products/Products';
import './styles/ant-drawer.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Category />
      <Products />
    </div>
  );
}

export default App;