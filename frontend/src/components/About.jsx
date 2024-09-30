import React from 'react';
import '../assets/styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>¿Quiénes Somos?</h1>
      <p>
        En Biodiversidad.cl, nos dedicamos a promover soluciones sostenibles para un futuro mejor. Nuestra misión es
        conectar a las personas con productos y servicios ecológicos que respeten el medio ambiente.
      </p>

      <div className="about-images">
        <div className="image-container">
          <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/mission-1.png" alt="Imagen 1 - Misión" />
          <p>Misión</p>
        </div>

        <div className="image-container">
          <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/vision_biodiversidad.png" alt="Imagen 2 - Visión" />
          <p>Visión</p>
        </div>

        <div className="image-container">
          <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/history-biodiversidad.png" alt="Imagen 3 - Historia" />
          <p>Historia</p>
        </div>
      </div>
    </div>
  );
};

export default About;

