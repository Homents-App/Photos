const data = require('./photoLink.js');
const fs = require('fs');

const writePhotos = fs.createWriteStream('utils/csv/photos.csv');
writePhotos.write(`id, bathroom, bedroom, bedroom2, house, house2, house3, kitchen, kitchen2, livingroom, livingroom2\n`, 'utf8');

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

const createPhotos = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let able = true;
    do {
      i -= 1;
      id += 1;
      const houses = getRandomPhotos(data.front, 3)
      const bedrooms = getRandomPhotos(data.bedroom, 3);
      const kitchens = getRandomPhotos(data.kitchen, 2);
      const livingrooms = getRandomPhotos(data.livingroom, 2);
      const bathrooms = getRandomPhotos(data.bathroom, 2);
      const bathroom = bathrooms[0];
      const bedroom = bedrooms[0];
      const bedroom2 = bedrooms[1];
      const house = houses[0];
      const house2 = houses[1];
      const house3 = houses[2];
      const kitchen = kitchens[0];
      const kitchen2 = kitchens[1];
      const livingroom = livingrooms[0];
      const livingroom2 = livingrooms[1];

      const row = `${id}, ${bathroom}, ${bedroom}, ${bedroom2}, ${house}, ${house2}, ${house3}, ${kitchen}, ${kitchen2}, ${livingroom}, ${livingroom2}\n`

      // last time the write is called, so we invoke the callback
      if (i === 0) {writer.write(row, encoding, callback);
      } else {able = writer.write(row, encoding);}

    } while (i > 0 && able);

    // if the buffer is full, wait for drain and then write
    if (i > 0) {writer.once('drain', write);}
  };
  write();
};

createPhotos(writePhotos, 'utf-8', () => {
  writePhotos.end();
  console.log('Done!')
})