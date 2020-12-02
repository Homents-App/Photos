var mongoose = require('mongoose');

// make all connections set the useNewUrlParser by default
mongoose.set('useNewUrlParser', true);
// make default index build use createIndex() instead of ensureIndex()
mongoose.set('useCreateIndex', true);
// make all connections set to this by default
mongoose.set('useUnifiedTopology', true);
// argument = uri for connection
mongoose.connect('mongodb://localhost/FEC_photos');

// access the default connection
const db = mongoose.connection;
db.once('open', () => console.log('Connected to listings database!'));

const ListingsSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    address: String,
    state: String,
    city: String,
    zipCode: Number,
    price: Number,
    beds: Number,
    baths: Number,
    photos: Array
});

// this model is a class to construct documents from
// each document is a new listing with properties declared in schema
const Listings = mongoose.model('listings', ListingsSchema);

module.exports = {
  Listings,
  db
}
