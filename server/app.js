const express = require('express');
const app = express();
const db = require('../db/index.js');
const path = require('path');
const seed = require('./util.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/listings/:id', (req, res) => {

  db.Listings.findOne({id: req.params.id})
    .then(listing => {
      if (!listing) {
        throw new Error;
      }
      res.status(200).send(listing);
    })
    .catch(err => {
      // console.error(err);
      res.status(404).send(err);
    })
})

// add in POST
app.post('/api/addListing', (req, res) => {

  db.Listings.find().sort({id: -1}).limit(1)
    .then((index) => {
      let max = index[0].id;
      console.log('adding: ', max + 1);
      seed.seed(max + 1);
    })
    .then(() => {
      res.status(200).send("Listing added!");
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// add in PUT (update)
app.put('/api/listings/:id', (req, res) => {
  // need to update specific parameter in the DB
  // maybe use variables and ? to dynamically update

  console.log(req.body);
  db.Listings.updateOne({id: req.params.id}, req.body)
    .then(() => {
      res.status(200).send("Listing updated!")
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// add in DELETE
app.delete('/api/listings/:id', (req, res) => {
  db.Listings.deleteOne({id: req.params.id})
    .then(() => {
      res.status(200).send("Listing deleted!")
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

module.exports = app;