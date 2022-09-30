import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import CategoryPage from './components/views/CategoryPage/CategoryPage';
import ProductPage from './components/views/ProductPage/ProductPage';
import CartPage from './components/views/CartPage/CartPage';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
