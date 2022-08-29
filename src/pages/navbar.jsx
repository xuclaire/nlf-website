import React from 'react';
import navbarLogo from '../images/navbar_logo.svg';
import getConnectedButton from '../images/getconnected_button.svg';
import { Navigation, Navbar, NavLink, Logo } from './navbar/navbar_styles';


function navbar() {
  return (
    <Navigation>
      <Logo to="/">
        <img src={navbarLogo} height={60} alt="Logo" />
      </Logo>
      <Navbar>
        <NavLink to="/about" activeStyle >
          About Us
        </NavLink>
        <NavLink to="/house_church" activeStyle>
          House Church
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
