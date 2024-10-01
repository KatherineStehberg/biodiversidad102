const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/api/auth');
const cartRoutes = require('./routes/api/cart');

// Usar las rutas
app.use('/api', authRoutes);
app.use('/api', cartRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de biodiversidad102!');
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en el puerto ${PORT}`);
});
