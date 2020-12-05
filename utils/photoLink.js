
const bathroom = [];
const livingroom = [];
const kitchen = [];
const front = [];
const bedroom = [];

let linkGenerator = (describe, array, max) => {

  for (let i = 0; i < max; i++) {
    let link = `https://sdctruliaphotos.s3.amazonaws.com/${describe}/${describe}${i}.jpg`

    array.push(link);
  }
  console.log(`${describe} array: ` , array)
}

linkGenerator('bathroom', bathroom, 150)
linkGenerator('livingroom', livingroom, 150)
linkGenerator('kitchen', kitchen, 150)
linkGenerator('front', front, 250)
linkGenerator('bedroom', bedroom, 300)

module.exports = {
  bathroom,
  livingroom,
  kitchen,
  front,
  bedroom
}
