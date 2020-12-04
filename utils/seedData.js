const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const createData = () => {
  writer.pipe(fs.createWriteStream('utils/csv/data.csv'));
  for (var i = 1; i <= 10000000; i++) {

    var options = {
      id: i,
      address: faker.address.streetAddress(),
      baths: faker.random.number({min: 2, max: 3}),
      beds: faker.random.number({min: 2, max: 4}),
      city: faker.address.city(),
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
createData();

