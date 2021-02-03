import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Home from './component/Home'
import Product from './component/Product'
import ProductInfo from './component/ProductInfo'
import ProductDetail from './component/ProductDetail'
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Header />}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Product" element={<Product />}>
            <Route path="/" element={<ProductInfo />}></Route>
            <Route path=":productkey" element={<ProductDetail />}></Route>
        </Route>
        
       
    </Routes>
    </div>
  );
}

export default App;
