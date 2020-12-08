const { pool } = require('./index.js');

// CREATE
// Creates new listing and returns serial id
// Second query uses id from first to create referenced row
const addListingData = async (params1, params2) => {
  let query1 = `INSERT INTO listings(address, baths, beds, city, price, state, zipCode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`;
  let query2 = `INSERT INTO photos(id, bathroom, bedroom, bedroom2, house, house2, house3, kitchen, kitchen2, livingroom, livingroom2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
  let res1, res2, listingID;
  try {
    res1 = await pool.query(query1, params1)
    listingID = res1.rows[0].id;
    res2 = await pool.query(query2, [listingID, ...params2])
  } catch (err) {
    console.error(err);
    throw(err);
  };
  return listingID;
}

// READ
// Retreives all listing and photo data for given id
const getListingData = async (id) => {
  let query = `SELECT * FROM listings as l INNER JOIN photos as p ON l.id=p.id WHERE l.id=$1;`

  let res;
  try {
    res = await pool.query(query, [id]);
  } catch (err) {
    console.error(err);
    throw (err);
  }
  return res.rows[0];
}

// UPDATE
// Simple update of price since no real update functionality in front end
const updateListing = async (params) => {
  let query = `UPDATE listings SET price=$1 WHERE id=$2;`;
  let res;
  try {
    res = await pool.query(query, params);
  } catch (err) {
    console.error(err);
    throw(err);
  }
  return res
}

const updatePhotos = async (params) => {
  let query = `UPDATE photos SET $1=$2, $3=$4, $5=$6;`
  let res;
  try {
    res = await pool.query(query, params);
  } catch (err) {
    console.error(err);
    throw(err);
  }
  return res
}

// DELETE
// Deletes row in listings by id, referenced row in photos will be automaticallyd deleted
const deleteListing = async (id) => {
  let query = `DELETE FROM listings WHERE id=$1;`

  let res;
  try {
    res = await pool.query(query, [id]);
  } catch (err) {
    console.error(err);
    throw(err);
  }
  return res;
}

module.exports = {
  addListingData,
  getListingData,
  updateListing,
  updatePhotos,
  deleteListing,
}