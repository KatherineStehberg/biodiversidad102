import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: token }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/cart', {
          headers: { Authorization: token }
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error al obtener el carrito:', error);
      }
    };

    fetchUserData();
    fetchCart();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Perfil del Usuario</h1>
      {user && (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Correo Electrónico: {user.email}</p>
        </div>
      )}
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              Producto ID: {item.productId}, Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Dashboard;
