const { Pool } = require('pg');  // Import the Pool class from the 'pg' package

// Create a new pool instance and configure it with your PostgreSQL connection details
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database-name',
  password: 'your-password',
  port: 5432,
});

module.exports = pool;  // Export the pool for use in other files
