import React from 'react';
import navbarLogo from '../../images/navbar_logo.svg';
import getConnectedButton from '../../images/getconnected_button.svg';
import { Navigation, Navbar, NavLink, Subgroup, SubLink, Logo } from './navbar_styles';


function navbar() {
  return (
    <Navigation>
      <Logo to="/">
        <img src={navbarLogo} height={60} alt="Logo" />
      </Logo>
      <Navbar>
        <NavLink to="/about" activeStyle >
          About Us
          <Subgroup>
            <SubLink to="/what_we_do" activeStyle>
              What We Do
            </SubLink>
            <br />
            <SubLink to="/leadership" activeStyle>
              Leadership
            </SubLink>
          </Subgroup>
        </NavLink>
        <NavLink to="/house_church" activeStyle>
          House Church
          <Subgroup>
            <SubLink to="/overview" activeStyle>
              Overview
            </SubLink>
            <br />
            <SubLink to="summer_house_church" activeStyle>
              Summer House Church
            </SubLink>
          </Subgroup>
        </NavLink>
        <NavLink to="/events" activeStyle>
          Events
        </NavLink>
        <NavLink to="/classes" activeStyle>
          Classes
        </NavLink>
        <NavLink to="/faq" activeStyle>
          FAQ
        </NavLink>
        <NavLink to="/get_connected" activeStyle>
          <img src={getConnectedButton} height={35} alt="gcButton" />
        </NavLink>
      </Navbar >
    </Navigation >
  );
}

export default navbar;
