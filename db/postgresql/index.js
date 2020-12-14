require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.DB_PORT,
  database: process.env.PGDATABASE
  // config do not allow to connect to root
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
