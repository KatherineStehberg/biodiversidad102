import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para la redirección

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Inicializa useNavigate

  // Función para manejar el cambio de los inputs del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, formData);
      console.log('Registro exitoso:', response.data);

      // Redirigir al usuario a la página de login después del registro
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
      setError('Ocurrió un error al intentar registrar el usuario.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Nombre"
            onChange={handleChange}
            required
            autoComplete="name"  // Atributo autocomplete añadido
          />
        </div>
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
            autoComplete="email"  // Atributo autocomplete añadido
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
            autoComplete="new-password"  // Atributo autocomplete añadido
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>
    </div>
  );
};

export default SignUp;
