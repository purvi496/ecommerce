import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header-section">
      <div className="header-container">

        <div className="logo">
          Book Haven
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart ({cartItemCount})
        </button>

      </div>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired
};

export default Header;