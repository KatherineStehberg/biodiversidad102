// src/components/ServiceCard.jsx
import React, { useState } from 'react';

const ServiceCard = ({ service, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(service, quantity);
  };

  return (
    <div className="featured-product">
      <div className="product-image">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="product-details">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <div className="price-container">
          <span className="price">${service.price}</span>
        </div>
        <div className="quantity-container">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
