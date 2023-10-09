import React from 'react';
import './App.css';
import {  Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CardsContextProvider from './context/CardsContextProvider';

function App() {
  return (
    <CardsContextProvider>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products"/>} />
          
        </Routes> 
      </ProductContextProvider>
    </CardsContextProvider>
    
  );
}

export default App;