const { Pool } = require('pg');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear una nueva instancia de Pool para la conexión con PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,        // Usuario de la base de datos
  host: process.env.DB_HOST,        // Host de la base de datos (desde variable de entorno)
  database: process.env.DB_NAME,    // Nombre de la base de datos (desde variable de entorno)
  password: process.env.DB_PASSWORD,// Contraseña de la base de datos
  port: process.env.PGPORT || 5432, // Puerto de PostgreSQL
  ssl: process.env.DB_URL.includes("render") ? { rejectUnauthorized: false } : false // Solo usar SSL si la URL contiene "render"
});

// Verificar la conexión
pool.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err);
  } else {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
  }
});

module.exports = pool;
