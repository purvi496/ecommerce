import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">

      <div className="book-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="book-image"
        />
      </div>

      <div className="product-details">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-rating">
          ⭐ {product.rating}
        </p>

        <p className="product-price">
          ₹{product.price}
        </p>

        <p className="stock-status">
          {product.inStock ? 'Paperback' : 'Out of Stock'}
        </p>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>

      </div>

    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;