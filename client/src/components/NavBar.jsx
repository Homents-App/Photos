import React from 'react';
import * as Styled from '../styles/styles.js';
import s from '../styles/styles.css';
import {searchIcon, mainMenu, backToSearchIcon, pathArrowIcon} from '../utils/SVG.jsx';

const NavBar = ({listing}) => {
  return (
    <>
    <Styled.NavBar>

      <Styled.LeftSideNavContainer>
        <Styled.Logo></Styled.Logo>
          <Styled.SearchHouses placeholder="Search for City, Neighborhood, Zip, County, ..."></Styled.SearchHouses>
          <Styled.SearchHousesButton aria-label="Search Button">{searchIcon}</Styled.SearchHousesButton>

        <Styled.BuyDropDown>Buy</Styled.BuyDropDown>
        <Styled.RentDropDown>Rent</Styled.RentDropDown>
        <Styled.MortgageDropDown>Mortage</Styled.MortgageDropDown>
      </Styled.LeftSideNavContainer>

      <Styled.RightSideNavContainer>
        <Styled.SavedHomes>Saved Homes</Styled.SavedHomes>
        <Styled.SavedSearches>Saved Searches</Styled.SavedSearches>
        <Styled.SignUpOrLogin>Sign up or Log in</Styled.SignUpOrLogin>
        <Styled.MainMenu aria-label="Main Menu">{mainMenu}</Styled.MainMenu>
      </Styled.RightSideNavContainer>

    </Styled.NavBar>

    <Styled.SearchPathContainer>
      <Styled.BackToSearch>
        {backToSearchIcon}Back To Search
      </Styled.BackToSearch>
      <Styled.PathContainer>
        For Sale{pathArrowIcon}
        <Styled.StatePath>{listing.state}</Styled.StatePath>
        {pathArrowIcon}
        <Styled.CityPath>{listing.city}</Styled.CityPath>
        {pathArrowIcon}
        <Styled.ZipPath>{listing.zipCode}</Styled.ZipPath>
        {pathArrowIcon}{listing.address}
      </Styled.PathContainer>
    </Styled.SearchPathContainer>

    </>
  )
}

export default NavBar;