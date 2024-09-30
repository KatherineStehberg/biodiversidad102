const express = require('express');
const router = express.Router();

// Ruta para autenticación
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;
