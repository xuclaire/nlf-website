import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep1.JPG';
import photo1 from './photos/manado1.JPG';
import photo2 from './photos/manado2.JPG';
import photo3 from './photos/manado3.JPG';
import photo4 from './photos/manado4.JPG';
import photo5 from './photos/manado5.JPG';
import photo6 from './photos/manado6.JPG';
import photo7 from './photos/manado7.JPG';
import photo8 from './photos/manado8.JPG';
import photo9 from './photos/manado9.JPG';
import photo10 from './photos/manado10.JPG';
import photo11 from './photos/manado11.JPG';
import photo12 from './photos/manado12.JPG';

export default function Manado() {
  return (
    <>
      <Header
        photo={photo6}
        HCname="Manado House Church"
        description="If you want to fight for our rights, DANCE and make TikToks,
        get front row, VIP access to THE best piano recitals, go on random tangents..
        then continue reading! We're like a soft, sweet, and kinda crunchy brownie with some
        extra special ingredients like marshmallows and spam chunks too but it somehow tastes
        so good by the love of Christ! So come join Manado HC!"
        shepPhoto1={shep}
        shepName1="Jeffery Huang"
        shepSchool1="Rice 2025"
        shepMajor1="Computer Science"
        shepMessenger1="https://www.facebook.com/profile.php?id=100009285341146 "
        shepEmail1="mailto:jh147@rice.edu"
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
