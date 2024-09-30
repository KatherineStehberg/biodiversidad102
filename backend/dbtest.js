app.get('/api/dbtest', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json({ message: 'DB connection successful', time: result.rows[0] });
    } catch (error) {
      res.status(500).json({ message: 'DB connection failed', error: error.message });
    }
  });
  