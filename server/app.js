const express = require('express');
const app = express();
const db = require('../db/postgresql/models.js');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

// Retrieves all listing data and photos for given id
app.get('/api/listings/:id', (req, res) => {

  db.getListingData(req.params.id)
    .then(listing => {
      if (!listing) {throw new Error;}
      res.status(200).send(listing);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// Creates listing with params1 and creates photos from params2
app.post('/api/addListing', (req, res) => {

  let params1 = [], params2 = [];
  for (var key in req.body) {
    let val = req.body[key];
    (typeof(val) === 'string' && val.slice(0,4) === 'http') ? params2.push(val) : params1.push(val);
  }

  db.addListingData(params1, params2)
    .then((id) => {
      res.status(200).send(`Listing id: ${id} added!`);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// Only updates price - no real update functionality on front end
app.put('/api/listings/:id', (req, res) => {

  db.updateListing([req.body.price, req.params.id])
    .then(() => {
      res.status(200).send(`Listing price updated to ${req.body.price}!`)
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// Deletes listing row, matching photo row automatically deleted
app.delete('/api/listings/:id', (req, res) => {
  db.deleteListing(req.params.id)
    .then(() => {
      res.status(200).send("Listing deleted!")
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

module.exports = app;