import React from 'react';
import logo from '../../images/logo.svg';
import {
  Box, Container, Column, FooterLink, Text, Column1, Row, Button, IconGroup,
} from './footer_styles';
import fbIcon from './icons/facebook.svg';
import instaIcon from './icons/instagram.svg';
import remindIcon from './icons/remind.svg';
import youtubeIcon from './icons/youtube.svg';
import button from './icons/footer_button.svg';

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Column1>
            <img src={logo} height={55} alt="Logo" />
          </Column1>
          <Column>
            <Text>7777 Fairbanks North Houston Rd</Text>
            <Text>Houston, TX 77040</Text>
            <Text>Phone: 713.896.7755</Text>
          </Column>
          <Column>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="#">What We Do</FooterLink>
            <FooterLink href="/house_church">House Church</FooterLink>
          </Column>
          <Column>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/classes">Classes</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </Column>
          <Column>
            <a href="/get_connected">
              <img src={button}/>
            </a>
            <IconGroup>
              <a href="https://www.facebook.com/groups/2725833467432826" target="_blank" rel="noreferrer">
                <img src={fbIcon} height={30} alt="Logo" />
              </a>
              <img src={instaIcon} height={30} alt="Logo" />
              <img src={remindIcon} height={24} alt="Logo" />
              <a href="https://www.youtube.com/c/nlfhtx" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} height={30} alt="Logo" />
              </a>
            </IconGroup>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;
