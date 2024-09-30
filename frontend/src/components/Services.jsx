import React, { useState } from 'react';
import '../assets/styles/services.css';

const servicesData = [
  {
    id: 1,
    name: 'Consultoría Ambiental',
    description: 'Consultoría para el manejo de recursos naturales y cumplimiento de normativas ambientales.',
    price: 150,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Garantiza-la-Seguridad-en-tu-Proyecto-Minero-4-1.png',
  },
  {
    id: 2,
    name: 'Educación y Capacitación',
    description: 'Programas educativos y talleres sobre biodiversidad y sostenibilidad.',
    price: 100,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-24-Eres-encargado-de-sustentabilidad-de-tu-empresa-2-1.png',
  },
  {
    id: 3,
    name: 'Monitoreo de Ecosistemas',
    description: 'Estudios y monitoreos de ecosistemas para la preservación de la biodiversidad.',
    price: 200,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-25_SI-estas-enfrentando-disputas-legales-4.png',
  },
  {
    id: 4,
    name: 'Evaluaciones de Impacto Ambiental',
    description: 'Evaluaciones de impacto ambiental para garantizar la compatibilidad con el medio ambiente.',
    price: 250,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-31_Facilita-la-Aprobacion-ambiental-de-tu-proyecto.png',
  },
];

const Services = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
    alert(`${service.name} ha sido agregado al carrito!`);
  };

  return (
    <div className="services-container">
      <h1>Servicios Disponibles</h1>
      <p>Selecciona los servicios que necesitas y agrégalos al carrito de compras.</p>

      <div className="service-list">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} className="service-image" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p><strong>Precio: ${service.price}</strong></p>
            <button onClick={() => addToCart(service)} className="add-to-cart-button">
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
