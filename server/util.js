const {Listings, db} = require('../db/index.js');
const faker = require('faker');
const data = require('../db/photoData.js');

var getRandomPhotos = (array, numOfPhotos) => {
  var randomPhotos = [];
  while (numOfPhotos > 0) {
    var randomImg = array[Math.floor(Math.random() * array.length)]
    if (!randomPhotos.includes(randomImg)) {
      randomPhotos.push(randomImg);
      numOfPhotos--;
    }
  }
  return randomPhotos;
}

var seed = (i) => {

  var house = data.houses[Math.floor(Math.random() * data.houses.length)];
  var bedrooms = getRandomPhotos(data.bedrooms, 3);
  var kitchens = getRandomPhotos(data.kitchens, 2);
  var livingRooms = getRandomPhotos(data.livingRooms, 2);
  var bathrooms = getRandomPhotos(data.bathrooms, 2);

  var options = {
    id: i,
    address: faker.address.streetAddress(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipCode: Math.floor(Math.random() * 90000) + 10000,
    price: Math.floor(faker.random.number({min: 300000, max: 1500000})/100000) * 100000,
    beds: faker.random.number({min: 2, max: 4}),
    baths: faker.random.number({min: 2, max: 3}),
    photos: [house, bedrooms[0], kitchens[0], bathrooms[0], livingRooms[0], bedrooms[1], kitchens[1], bedrooms[2], bathrooms[1], livingRooms[1]]
  }
  // this is a new document instance for each listing
  var addListing = new Listings(options);
  addListing.save();
  console.log("Added to DB")
}

module.exports = {seed};