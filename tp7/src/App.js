import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Services/AllProducts.js';
import SingleProduct from './views/Product';
import Home from './views/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
