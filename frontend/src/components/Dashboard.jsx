import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Hacer las solicitudes en paralelo con Promise.all
        const [userResponse, cartResponse] = await Promise.all([
          axios.get('http://localhost:5000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:5000/api/cart', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        setUser(userResponse.data);
        setCart(cartResponse.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario o carrito:', error);
        setError('Hubo un problema al cargar tus datos. Intenta nuevamente más tarde.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Perfil del Usuario</h1>
      {error && <p className="error-message">{error}</p>}
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Correo Electrónico: {user.email}</p>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
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
