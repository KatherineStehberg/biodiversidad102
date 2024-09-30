const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const pool = require('./db'); // PostgreSQL connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de biodiversidad102!');
});

// User registration route
app.post('/api/register', async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (userExists.rows.length > 0) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *',
      [name, username, hashedPassword]
    );
    res.status(201).json({ message: 'User registered', user: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
});

// User login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) return res.status(400).json({ message: 'User not found' });

    const isValidPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!isValidPassword) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Cart route
app.get('/api/cart', verifyToken, async (req, res) => {
  try {
    const cartItems = await pool.query('SELECT * FROM cart WHERE user_id = $1', [req.user.id]);
    res.json(cartItems.rows);
  } catch (err) {
    res.status(500).send('Error fetching cart items');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
