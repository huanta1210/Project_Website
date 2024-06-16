import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ProductListAdmin from './admin/ProduclistAdmin';
import AddProduct from './admin/ProductAdd';
import EditProduct from './admin/ProductEdit';

import HomePage from './pages/HomePage';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import LoginRecover from './pages/login/LoginRecover';
import Cart from './pages/cart/Cart';
import PrivateRouter from './compoments/PrivateRoute';
import PayMents from './pages/cart/Payments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/cart/payments" element={<PayMents />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<PrivateRouter />}>
          <Route path="product/list" element={<ProductListAdmin />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="editproduct/:id" element={<EditProduct />} />
        </Route>

        <Route path="/login_recover" element={<LoginRecover />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
