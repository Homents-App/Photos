const data = require('../allPhotos/photoLink.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// grabs random photos from buckets
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

const createPhotos = () => {
  writer.pipe(fs.createWriteStream('utils/csv/photos.csv'));
  for (var i = 1; i <= 10000000; i++) {

    var house = getRandomPhotos(data.front, 3)
    var bedroom = getRandomPhotos(data.bedroom, 3);
    var kitchen = getRandomPhotos(data.kitchen, 2);
    var livingroom = getRandomPhotos(data.livingroom, 2);
    var bathroom = getRandomPhotos(data.bathroom, 2);

    var photos = {
      id: i,
      house: house[0],
      house2: house[1],
      house3: house[2],
      bedroom: bedroom[0],
      bedroom2: bedroom[1],
      bedroom3: bedroom[2],
      kitchen: kitchen[0],
      kitchen2: kitchen[1],
      livingroom: livingroom[0],
      livingroom2: livingroom[1],
      bathroom: bathroom[0],
      bathroom2: bathroom[1]
    }
    // write this info into a CSV file
    writer.write(photos)
  }
  writer.end();
  console.log('done');
}
createPhotos();