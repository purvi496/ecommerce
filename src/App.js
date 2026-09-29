import React, { useState } from 'react';
import './App.css';

import Header from './components/header';
import Navigation from './components/navigation';
import ProductList from './components/productlist';

import { PRODUCTS } from './utils/products';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
  };

  return (
    <div className="App">

      <Header
        cartItemCount={cart.length}
        onCartClick={handleCartClick}
      />

      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="main-content">

        {currentPage === 'products' && (
          <ProductList
            products={PRODUCTS}
            onAddToCart={addToCart}
          />
        )}

        {currentPage === 'home' && (
          <div className="page-message">
            <h2>Welcome to our E-Commerce Store</h2>
            <p>Browse our products and find what you need.</p>
          </div>
        )}

        {currentPage === 'cart' && (
          <div className="page-message">
            <h2>Shopping Cart</h2>
            <p>You have {cart.length} item(s) in your cart.</p>
          </div>
        )}

        {currentPage === 'checkout' && (
          <div className="page-message">
            <h2>Checkout</h2>
            <p>Checkout page</p>
          </div>
        )}

      </main>

    </div>
  );
}

export default App;