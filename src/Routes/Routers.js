import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from "../pages/Home";
import Products from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import DetailsPro from "../pages/DetailsProduct";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailsPro />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  };
  
  export default Routers;