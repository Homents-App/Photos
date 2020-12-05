const data = require('../allPhotos/photoLink.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

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

const createBothData = () => {
  writer.pipe(fs.createWriteStream('utils/csv/both.csv'));
  for (var i = 1; i <= 10000000; i++) {

    var house = getRandomPhotos(data.front, 3)
    var bedroom = getRandomPhotos(data.bedroom, 3);
    var kitchen = getRandomPhotos(data.kitchen, 2);
    var livingroom = getRandomPhotos(data.livingroom, 2);
    var bathroom = getRandomPhotos(data.bathroom, 2);

    var options = {
      id: i,
      address: faker.address.streetAddress(),
      baths: faker.random.number({min: 2, max: 3}),
      beds: faker.random.number({min: 2, max: 4}),
      city: faker.address.city(),
      photos: [house[0], house[1], house[2], bedroom[0], bedroom[1], bedroom[2], kitchen[0], kitchen[1], livingroom[0], livingroom[1], bathroom[0], bathroom[1]],
      price: Math.floor(faker.random.number({min: 300000, max: 1500000})/100000) * 100000,
      state: faker.address.state(),
      zipCode: Math.floor(Math.random() * 90000) + 10000
    }

    // write this info into a CSV file
    writer.write(options)
  }
  writer.end();
  console.log('done');
}
createBothData();