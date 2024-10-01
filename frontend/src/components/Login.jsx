import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, formData);
      console.log('Inicio de sesión exitoso:', response.data);
      
      // Guardar token JWT en el almacenamiento local o cookies
      localStorage.setItem('token', response.data.token);

      // Redirigir al Dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        {/* Formulario de login como lo tienes */}
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;

