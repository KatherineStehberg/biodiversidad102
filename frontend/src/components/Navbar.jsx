import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import  '../assets/styles/Navbar.css'

const Navbar = ({ cartItems }) => {
  const [isProfileClicked, setProfileClicked] = useState(false);

  const handleProfileClick = () => {
    setProfileClicked(!isProfileClicked);
  };

  return (
    <header>
      <div className="top-bar">
        <p>¡Bienvenidos a nuestra tienda ecológica!</p>
        <div className="top-links">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </div>
      <div className="main-navbar">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="Biodiversidad.cl" /></Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button><i className="bi bi-search"></i></button>
        </div>
        <div className="user-actions">
          <Link to="/dashboard" onClick={handleProfileClick}>
            <i className={`bi bi-person ${isProfileClicked ? 'clicked' : ''}`}></i> {/* Solo ícono, sin texto */}
          </Link>
          <Link to="/cart">
            <img
              src="https://biodiversidad.cl/public_html/biodiversidad/wp-content/uploads/2024/09/icons8-shopping-cart-48.png"
              alt="Carrito de compras"
              style={{ width: '24px', height: '24px' }}
            />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </Link>
        </div>
      </div>
      <nav className="menu-bar">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Navbar;
