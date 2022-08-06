import React from 'react';
import logo from '../../images/logo.svg';
import {
  Box, Container, Column, FooterLink, Text, Column1, Row, Container2, Button,
} from './footer_styles';

function Footer() {
  return (
    <Box>
      <Container2>
        <Column1>
          <img src={logo} height={55} alt="Logo" />
        </Column1>
        <Column>
          <Text>7777 Fairbanks North Houston Rd</Text>
          <Text>Houston, TX 77040</Text>
          <Text>Phone: 713.896.7755</Text>
        </Column>
        <Container>
          <Row>
            <Column>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">What We Do</FooterLink>
              <FooterLink href="#">House Church</FooterLink>
            </Column>
            <Column>
              <FooterLink href="#">Events</FooterLink>
              <FooterLink href="#">Classes</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </Column>
            <Column>
              <Button>Get Connected</Button>
            </Column>
          </Row>
        </Container>
      </Container2>
    </Box>
  );
}
export default Footer;
