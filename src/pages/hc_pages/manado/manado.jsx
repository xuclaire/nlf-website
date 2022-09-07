import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.JPEG';
import photo1 from './photos/MANADO1.JPG';
import photo2 from './photos/MANADO2.JPG';
import photo3 from './photos/MANADO3.JPG';
import photo4 from './photos/MANADO4.JPG';
import photo5 from './photos/MANADO5.jpg';
import photo6 from './photos/MANADO6.JPG';
import photo7 from './photos/MANADO7.JPG';
import photo8 from './photos/MANADO8.JPG';
import photo9 from './photos/MANADO9.JPG';
import photo10 from './photos/MANADO10.jpg';
import photo11 from './photos/MANADO11.jpg';
import photo12 from './photos/MANADO12.JPG';

export default function Manado() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Manado House Church"
        description="If you want to fight for our rights, DANCE and make TikToks,
        get front row, VIP access to THE best piano recitals, go on random tangents..
        then continue reading! We're like a soft, sweet, and kinda crunchy brownie with some
        extra special ingredients like marshmallows and spam chunks too but it somehow tastes
        so good by the love of Christ! So come join Manado HC!"
        shepPhoto1={shep}
        shepName1="Christine Lee"
        shepSchool1="Rice 2023"
        shepMajor1="Computer Science"
        shepMessenger1="https://www.facebook.com/cl.supernova15 "
        shepEmail1="mailto:cl115@rice.edu"
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
