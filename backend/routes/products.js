const express = require('express');
const router = express.Router();

// Ejemplo de productos en memoria (puedes reemplazar esto con una base de datos)
let products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
];

// Obtener todos los productos
router.get('/', (req, res) => {
  res.json(products);
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Crear un nuevo producto
router.post('/', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Actualizar un producto
router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = {
      id: productId,
      name: req.body.name,
      price: req.body.price,
    };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.json({ message: 'Producto eliminado' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

module.exports = router;

