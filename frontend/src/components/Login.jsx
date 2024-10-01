import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Hook para redirección

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Inicializa useNavigate para la redirección

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud POST al backend
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, formData);

      console.log('Inicio de sesión exitoso:', response.data);

      // Almacenar el token JWT en el localStorage
      localStorage.setItem('token', response.data.token);

      // Redirigir al dashboard después del login exitoso
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Usuario o contraseña incorrectos.');  // Mostrar mensaje de error
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Correo Electrónico"
            onChange={handleChange}
            required
            autoComplete="email"  // Atributo autocomplete para mejorar la usabilidad
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Contraseña"
            onChange={handleChange}
            required
            autoComplete="current-password"  // Atributo autocomplete para contraseñas
          />
        </div>
        {error && <p className="error-message">{error}</p>}  {/* Mostrar el error si ocurre */}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  );
};

export default Login;
