const express = require('express');
const app = express();
// const db = require('../db/index.js');
// const db = require('../db/postgresql/index.js');
const db = require('../db/postgresql/models.js');
const path = require('path');
const seed = require('./util.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/listings/:id', (req, res) => {

  db.getListingData(req.params.id)
    .then(listing => {
      if (!listing) {throw new Error;}
      console.log('listing: ', listing);
      res.status(200).send(listing);
    })
    .catch(err => {
      res.status(404).send(err);
    })

})

// add in POST
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
  db.deleteListing(req.params.id)
    .then(() => {
      res.status(200).send("Listing deleted!")
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

module.exports = app;