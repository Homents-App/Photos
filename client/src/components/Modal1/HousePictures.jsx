import React from 'react';
import * as Styled from '../../styles/styles.js';

const HousePicturesSection = ({photos, setSelectedImg}) => {

  return (
    <Styled.HousePictures>
      <Styled.HouseImage1 onClick={() => setSelectedImg(photos[0])} photo={photos[0]}></Styled.HouseImage1>
      <Styled.HouseImage2 onClick={() => setSelectedImg(photos[1])} photo={photos[1]}></Styled.HouseImage2>
      <Styled.HouseImage3 onClick={() => setSelectedImg(photos[2])} photo={photos[2]}></Styled.HouseImage3>
      <Styled.HouseImage4 onClick={() => setSelectedImg(photos[3])} photo={photos[3]}></Styled.HouseImage4>
      <Styled.HouseImage5 onClick={() => setSelectedImg(photos[4])} photo={photos[4]}></Styled.HouseImage5>
      <Styled.HouseImage6 onClick={() => setSelectedImg(photos[5])} photo={photos[5]}></Styled.HouseImage6>
      <Styled.HouseImage7 onClick={() => setSelectedImg(photos[6])} photo={photos[6]}></Styled.HouseImage7>
      <Styled.HouseImage8 onClick={() => setSelectedImg(photos[7])} photo={photos[7]}></Styled.HouseImage8>
      <Styled.HouseImage9 onClick={() => setSelectedImg(photos[8])} photo={photos[8]}></Styled.HouseImage9>
      <Styled.HouseImage10 onClick={() => setSelectedImg(photos[9])} photo={photos[9]}></Styled.HouseImage10>
    </Styled.HousePictures>
  )
}

export default HousePicturesSection;

{/* <Styled.HouseImage1 onClick={() => setSelectedImg(photos.house)} photo={photos.house}></Styled.HouseImage1>
      <Styled.HouseImage2 onClick={() => setSelectedImg(photos.house2)} photo={photos.house2}></Styled.HouseImage2>
      <Styled.HouseImage3 onClick={() => setSelectedImg(photos.house3)} photo={photos.house3}></Styled.HouseImage3>
      <Styled.HouseImage4 onClick={() => setSelectedImg(photos.livingroom)} photo={photos.livingroom}></Styled.HouseImage4>
      <Styled.HouseImage5 onClick={() => setSelectedImg(photos.livingroom2)} photo={photos.livingroom2}></Styled.HouseImage5>
      <Styled.HouseImage6 onClick={() => setSelectedImg(photos.kitchen)} photo={photos.kitchen}></Styled.HouseImage6>
      <Styled.HouseImage7 onClick={() => setSelectedImg(photos.kitchen2)} photo={photos.kitchen2}></Styled.HouseImage7>
      <Styled.HouseImage8 onClick={() => setSelectedImg(photos.bathroom)} photo={photos.bathroom}></Styled.HouseImage8>
      <Styled.HouseImage9 onClick={() => setSelectedImg(photos.bedroom)} photo={photos.bedroom}></Styled.HouseImage9>
      <Styled.HouseImage10 onClick={() => setSelectedImg(photos.bedroom2)} photo={photos.bedroom2}></Styled.HouseImage10> */}