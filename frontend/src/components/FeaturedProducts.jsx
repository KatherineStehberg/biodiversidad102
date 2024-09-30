import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="featured-products-container">
        <div className="featured-product">
          <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/kit-jardineria.jpg" alt="Kit de jardinería" />
          <h3>Kit de jardinería</h3>
          <p>Solo desde <span className="price">$9.99</span></p>
        </div>
        {/* Agrega más productos aquí */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
