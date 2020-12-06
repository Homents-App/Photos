const faker = require('faker');
const fs = require('fs');

const writeData = fs.createWriteStream('utils/csv/data1.csv');
writeData.write(`id, address, baths, beds, city, price, max, state, zipCode\n`, 'utf8');

const createData = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let able = true;
    do {
      i -= 1;
      // commented out id because opted to use serial data type in listings table
      // id += 1;
      const address = faker.address.streetAddress();
      const baths = faker.random.number({min: 2, max: 3});
      const beds = faker.random.number({min: 2, max: 4});
      const city = faker.address.city();
      const price = Math.floor(faker.random.number({min: 300000, max: 1500000})/100000) * 100000;
      const state = faker.address.state();
      const zipCode = Math.floor(Math.random() * 90000) + 10000;
      const data = `${address}, ${baths}, ${beds}, ${city}, ${price}, ${state}, ${zipCode}\n`

      // last time the write is called, so we invoke the callback
      if (i === 0) {writer.write(data, encoding, callback);
      } else {able = writer.write(data, encoding);}

    } while (i > 0 && able);

    // if the buffer is full, wait for drain and then write
    if (i > 0) {writer.once('drain', write);}
  };
  write();
};

createData(writeData, 'utf-8', () => {
  writeData.end();
  console.log('Done!')
})
