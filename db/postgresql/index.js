require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE
});

pool.on('error', (err, client) => {
  console.error('Error: ', err);
})

// uncomment to test the pool connection
// pool.query('SELECT NOW()', (err, res) => {
//   console.log('res: ', res);
// })

module.exports = {
  pool
}