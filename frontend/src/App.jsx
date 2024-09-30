import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedServices from './components/FeaturedServices';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart'; // Componente para el carrito
import './assets/styles/styles.css';

const App = () => {
  // Estado para el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (item) => {
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    alert(`${item.name} ha sido agregado al carrito.`);
  };

  return (
    <Router>
      <header>

        <Navbar cartItems={cart.length} /> {/* Pasar el número de items en el carrito */}
      </header>

      {/* Sección Hero con imagen */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://biodiversidad.cl/wp-content/uploads/2024/09/inicio-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <div className="hero-text">
          <h2>Conectando con la Naturaleza y Soluciones Sostenibles</h2>
          <p>Explora nuestros productos y servicios que promueven un futuro más verde.</p>
        </div>
      </section>

      <main>
        <Routes>
          <Route path="/products" element={<Products addToCart={addToCart} />} /> {/* Pasar función para agregar productos */}
          <Route path="/services" element={<Services addToCart={addToCart} />} /> {/* Pasar función para agregar servicios */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart cartItems={cart} />} /> {/* Ruta para ver el carrito */}
        </Routes>

        <section className="featured-section">
          <h2>Productos Destacados</h2>
          <div className="featured-products-container">
            <FeaturedProducts addToCart={addToCart} />
          </div>
        </section>

        <section className="featured-section">
          <h2>Servicios Destacados</h2>
          <div className="featured-services-container">
            <FeaturedServices addToCart={addToCart} />
          </div>
        </section>
      </main>

      <Footer />
    </Router>
  );
};

export default App;

