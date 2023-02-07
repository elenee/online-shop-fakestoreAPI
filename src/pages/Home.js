import Category from '../components/categories/Category'
import Cover from '../components/cover/Cover'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'

const Home = ({setSelectedCategory}) => {
  return (
    <>
    <Cover />
    <Category setSelectedCategory={setSelectedCategory} />
    <Products />
    </>
  )
}

export default Home