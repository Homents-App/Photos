const express = require('express');
const app = express();
const db = require('../db/postgresql/models.js');
const path = require('path');
const compression = require('compression');
const client = require('./redis.js')
const redis = require('redis');
const morgan = require('morgan');

app.use(compression());

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

// Retrieves all listing data and photos for given id
app.get('/api/listings/:id', (req, res) => {
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let fakeId = getRandomNum(8000000, 10000000);
  let id = req.params.id || fakeId;

  db.getListingData(id)
    .then(listing => {
      console.log('server here1:', req.params.id);
      if (!listing) {throw new Error;}
      // adding the listing to redis
      console.log('here')
      client.set(req.params.id, listing, (err, reply) => {
        if (err) throw err;
        console.log('Redis', reply);
      });
      return listing
    })
    .then(listing => {
      res.status(200).send(listing);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

app.get('/loaderio-2d312fb6eb126eee0159e8c5bb0fd79a.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio.txt'))
})

// app.get('/', (req, res) => {
//    function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// let fakeId = getRandomNum(8000000, 10000000);
// let id = req.params.id || fakeId;

// db.getListingData(id)
//   .then(listing => {
//     console.log('server here:2', req.params.id);
//     if (!listing) {throw new Error;}
//     // adding the listing to redis
//     client.set(req.params.id, data, (err, reply) => {
//       if (err) throw err;
//       console.log('Redis', reply);
//     });
//     return listing;
//   })
//   .then(listing => {
//     console.log('listing', listing);
//     res.status(200).send(listing);
//   })
//   .catch(err => {
//     res.status(404).send(err);
//   })
// })

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
