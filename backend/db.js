const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Use the connection string directly
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false // Required for Render connections
  }
});

// Verifying connection
pool.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err);
  } else {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
  }
});

module.exports = pool;

