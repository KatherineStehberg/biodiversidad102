const express = require('express');
const pool = require('../../db'); // Conexión a PostgreSQL
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware para verificar token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token inválido' });
  }
};

// Ruta para obtener los artículos del carrito
router.get('/cart', verifyToken, async (req, res) => {
  try {
    const cartItems = await pool.query('SELECT * FROM cart WHERE user_id = $1', [req.user.id]);
    res.json(cartItems.rows);
  } catch (err) {
    console.error('Error al obtener artículos del carrito:', err);
    res.status(500).send('Error al obtener artículos del carrito');
  }
});

module.exports = router;
