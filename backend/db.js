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
  ssl: false                        // Desactiva SSL completamente
});

// Verificar la conexión
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos PostgreSQL');
  release(); // Liberar el cliente después de la conexión
});

// Función para probar una consulta simple
const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Conexión a la base de datos exitosa. Hora actual:', result.rows[0].now);
  } catch (err) {
    console.error('Error ejecutando la consulta:', err);
  }
};

// Llamar a la función de prueba de conexión
testConnection();

// Exportar el pool para ser usado en otras partes de la aplicación
module.exports = pool;
