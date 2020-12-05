const { pool } = require('./index.js');

// CREATE
// Is it better to do two separate queries or insert with a join?
const addListing = () => {
  let query =
  pool
    .query()
}

const addPhotos = () => {
  let query =
  pool
    .query()
}

// READ
// Implement this with an inner join
const getListingData = async (id) => {
  console.log('here', id);
  let query = `SELECT * FROM listings as l INNER JOIN photos as p ON l.id=p.id WHERE l.id=$1;`

  let res;

  try {
    res = await pool.query(query, [id]);
  } catch (e) {
    console.error(e);
    throw (e);
  }
  return res.rows[0];
}

// UPDATE
// Is it better to do two separate queries or insert with a join?
const updateListing = () => {
  let query =
  pool
    .query()
}

const updatePhotos = () => {
  let query =
  pool
    .query()
}

// DELETE
// Is it better to do two separate queries or insert with a join?
const deleteListing = () => {
  let query =
  pool
    .query()
}

const deletePhotos = () => {
  let query =
  pool
    .query()
}

module.exports = {
  addListing,
  addPhotos,
  getListingData,
  updateListing,
  updatePhotos,
  deleteListing,
  deletePhotos
}