import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep1.png';
import photo1 from './photos/cmu1.jpg';
import photo2 from './photos/cmu2.jpg';
import photo3 from './photos/cmu3.png';
import photo4 from './photos/cmu4.png';
import photo5 from './photos/cmu5.png';
import photo6 from './photos/cmu6.png';
import photo7 from './photos/cmu7.png';
import photo8 from './photos/cmu8.png';
import photo9 from './photos/cmu9.png';
import photo10 from './photos/cmu10.png';
import photo11 from './photos/cmu11.png';
import photo12 from './photos/cmu12.png';

export default function CMU() {
  return (
    <>
      <Header
        photo={photo9}
        HCname="Chiang Mai University House Church"
        description="CMU is a family of 6 members (1 dude and 5 gals, clearly we need some more testosterone). 
        Join us for late night talks, one too many boba study breaks, and spontaneous excursions. 
        We love to celebrate leaps of faith but also uplift and encourage one another during tougher times. 
        We hope you come visit our close knit super loving not at all annoying family :)"
        shepPhoto1={shep}
        shepName1="Rebekah Heo"
        shepSchool1="Rice 2024"
        shepMajor1="Neuroscience"
        shepMessenger1="https://www.facebook.com/rebekah.heo"
        shepEmail1="mailto:rjh10@rice.edu"
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
