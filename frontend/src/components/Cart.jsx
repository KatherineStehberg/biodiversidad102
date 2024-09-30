import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cart`, {
          headers: { Authorization: localStorage.getItem('token') }
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
