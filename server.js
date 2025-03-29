const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');  // Import the Pool class from the 'pg' package

const app = express();

// Enable CORS for all routes (useful for development with frontend on different ports)
app.use(cors());

// Middleware for parsing JSON data in requests
app.use(express.json());

// 🟢 Database connection setup
const pool = new Pool({
  user: 'your-username',  // Replace with your actual PostgreSQL username
  host: 'localhost',
  database: 'your-database-name',  // Replace with your actual database name
  password: 'your-password',  // Replace with your actual database password
  port: 5432,  // Default PostgreSQL port
});

// 🟢 Test the database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');  // Get current time from DB
    res.json({ message: 'Database connected successfully!', time: result.rows[0].now });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});
 
// 🟢 Test the server
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
