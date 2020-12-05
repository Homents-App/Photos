import React, {useState} from 'react';
import {FiHeart, FiShare} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import TabSection from './Modal1/TabSection.jsx';
import HousePicturesSection from './Modal1/HousePictures.jsx';
import TourSection from './Modal1/Tours.jsx';
import * as Styled from '../styles/styles.js';
import s from '../styles/styles.css';

const FirstModal = (props) => {
  if (!props.open) return null

  return (
    <>
      <Styled.Overlay onClick={props.onClose}/>

      <Styled.Modal1>

        <TabSection/>

        <Styled.Modal1ButtonsArea>
          <Styled.ModalSave><FiHeart className={`${s.iconModal}`}/>Save</Styled.ModalSave>
          <Styled.ModalShare><FiShare className={`${s.iconModal}`}/>Share</Styled.ModalShare>
          <Styled.CloseButton onClick={props.onClose}><CgClose className={`${s.closeButton}`}/></Styled.CloseButton>
        </Styled.Modal1ButtonsArea>

        <Styled.HouseInfoArea>
          <Styled.HouseInfo>{`${props.listing.address} | $${props.listing.price.toLocaleString('en')} | ${props.listing.beds} Beds ${props.listing.baths} Baths`}</Styled.HouseInfo>
        </Styled.HouseInfoArea>

        <HousePicturesSection photos={props.photos} setSelectedImg={props.setSelectedImg}/>

        <TourSection />

      </Styled.Modal1>

    </>
  )
}

export default FirstModal;