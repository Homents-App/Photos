import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import * as Styled from '../styles/styles.js';
import {rightArrow, leftArrow} from '../utils/SVG.jsx';
import s from '../styles/styles.css';

const ImageCarousel = ({selectedImg, onClose, setSelectedImg, listing, photos}) => {
  if (!selectedImg) return null

  var handleNextClick = () => {
    var nextImgIndex = photos.lastIndexOf(selectedImg);

    nextImgIndex === (photos.length - 1) ? setSelectedImg(photos[0]) : setSelectedImg(photos[nextImgIndex + 1]);
  }

  var handlePrevClick = () => {
    var nextImgIndex = photos.lastIndexOf(selectedImg);

    nextImgIndex === 0 ? setSelectedImg(photos[photos.length - 1]) : setSelectedImg(photos[nextImgIndex - 1]);
  }

  return (
    <>
      <Styled.ImageDisplay>

        <Styled.CarouselHouseInfo>
        {`${listing.address} | $${listing.price.toLocaleString('en')} | ${listing.beds} Beds ${listing.baths} Baths`}
        </Styled.CarouselHouseInfo>

        <Styled.Modal2Buttons>
          <Styled.TourButton>Schedule a Tour</Styled.TourButton>

          <Styled.ModalSave><FiHeart className={`${s.iconModal}`}/>Save</Styled.ModalSave>

          <Styled.ModalShare><FiShare className={`${s.iconModal}`}/>Share</Styled.ModalShare>

          <Styled.CloseButton2 onClick={onClose}><CgClose className={`${s.closeButton}`}/></Styled.CloseButton2>
        </Styled.Modal2Buttons>

        <Styled.ImageSelected photo={selectedImg}></Styled.ImageSelected>

        <Styled.NextButton onClick={handleNextClick}>{rightArrow}</Styled.NextButton>
        <Styled.PrevButton onClick={handlePrevClick}>{leftArrow}</Styled.PrevButton>

        <Styled.pageCountContainer>
          {`${photos.indexOf(selectedImg) + 1} of ${photos.length}`}
        </Styled.pageCountContainer>

      </Styled.ImageDisplay>

    </>

  )
}

export default ImageCarousel;