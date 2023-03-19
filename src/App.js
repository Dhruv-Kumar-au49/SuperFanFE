import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductListPage from './Components/ProductListPage';
import ProductDetailPage from './Components/ProductDetailPage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import LoginPage from './Components/LoginPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';



function App() {
  return (
    <div>
     
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/products" element={<ProductListPage/>}/>
        <Route exact path="/product/:id" element={<ProductDetailPage/>} />
        <Route exact path="/cart" element={<CartPage/>} />
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
