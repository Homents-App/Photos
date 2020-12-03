
// use https://loremflickr.com/1536/1152/category1,category2
// need to have total of 1000 images
  // 250 for house exterior
    //https://loremflickr.com/1536/1152/house,exterior/all
  // 300 for bedroom
    //https://loremflickr.com/1536/1152/house,bedroom/all
  // 150 for kitchen
    //https://loremflickr.com/1536/1152/house,kitchen/all
  // 150 for bathroom
    //https://loremflickr.com/1536/1152/house,bathroom/all
  // 150 for living room
    //https://loremflickr.com/1536/1152/house,livingroom/all


const AWS = require('aws-sdk');
const axios = require ('axios');
const fs = require('fs');
const s3 = new AWS.S3();
const path = require('path');

async function download(describe, max) {
  for (let i = 0; i < max; i++) {
    let url = `https://loremflickr.com/1536/1152/house,${describe}/all`;
    const folder = path.resolve(`./allPhotos/${describe}`, `${describe}${i}.jpg`);

    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    })

    response.data.pipe(fs.createWriteStream(folder))
  }
}
download('front', 250);
download('bathroom', 150);
download('bedroom', 300);
download('kitchen', 150);
download('livingroom', 150);
