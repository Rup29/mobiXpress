import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer'
import ProductList from './components/Product/ProductList'
import ShortSerach from './components/Product/ShortSearch'
import Banner from './components/Banner';
import Feature from './components/Feature';
function App() {
  return (
  <div className='wapper'>
    <Header/>
    <Banner/>
    <ShortSerach/>
    <Feature/>
    <ProductList/>
    <Footer/>
  </div>
  );
}

export default App;
