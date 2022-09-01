import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpg';
import photo1 from './photos/Anatolia1.jpg';
import photo2 from './photos/Anatolia2.jpg';
import photo3 from './photos/Anatolia3.jpeg';
import photo4 from './photos/Anatolia4.jpg';
import photo5 from './photos/Anatolia5.JPG';
import photo6 from './photos/Anatolia6.jpg';
import photo7 from './photos/Anatolia7.jpg';
import photo8 from './photos/Anatolia8.jpg';
import photo9 from './photos/Anatolia9.jpeg';
import photo10 from './photos/Anatolia10.jpg';
import photo11 from './photos/Anatolia11.jpg';
import photo12 from './photos/Anatolia12.jpg';


export default function Anatolia() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Anatolia House Church"
        description="Our members, except one or two (including the shepherd herself),
      are among the kindest people you can find on the earth. Not only will you love
      them at first sight, but the more you get to know them, the more you will see a
      pure and loving heart inside each one. Anatolia is not just a Christian group.
      Instead, it’s a home where everyone can find comfort and rest. Home is where our
      family is, and yes, we are a family, bound by the divine love of God. Welcome to
      visit us and join us!"
        shepPhoto1={shep}
        shepName1="Cici Du"
        shepSchool1="Rice 2023"
        shepMajor1="Statistics"
        shepMessenger1="https://www.facebook.com/cici.du.33"
        shepEmail1="mailto:sd80@rice.edu"
      />
      <PhotoGallery
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        photo4={photo4}
        photo5={photo5}
        photo6={photo6}
        photo7={photo7}
        photo8={photo8}
        photo9={photo9}
        photo10={photo10}
        photo11={photo11}
        photo12={photo12}
      />
    </>
  );
}
