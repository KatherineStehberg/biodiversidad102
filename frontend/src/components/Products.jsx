import React, { useState } from 'react';
import '../assets/styles/products.css';

const productsData = [
  {
    id: 1,
    name: 'Kit de Jardinería',
    description: 'Todo lo necesario para empezar tu huerto en casa.',
    price: 29.99,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/kit-jardineria.jpg', // Imagen actualizada
  },
  {
    id: 2,
    name: 'Compost Orgánico',
    description: 'Mejora la calidad de tu suelo de manera natural.',
    price: 15.99,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/serviciodecompostajecomunitario.jpg', // Imagen actualizada
  },
  {
    id: 3,
    name: 'Panel Solar',
    description: 'Energía renovable para tu hogar.',
    price: 199.99,
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/instalaciondeenergiarenovable.jpg', // Imagen actualizada
  },
  // Agrega más productos si es necesario
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ha sido agregado al carrito!`);
  };

  return (
    <div className="products-container">
      <h1>Productos Disponibles</h1>
      <p>Explora nuestra selección de productos ecológicos y sostenibles.</p>

      <div className="product-list">
        {productsData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Precio: ${product.price}</strong></p>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
