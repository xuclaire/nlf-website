import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import photo1 from './photos/lahu1.jpg';
import photo2 from './photos/lahu2.jpg';
import photo3 from './photos/lahu3.jpg';
import photo4 from './photos/lahu4.jpg';
import photo5 from './photos/lahu5.jpg';
import photo6 from './photos/lahu6.jpg';
import photo7 from './photos/lahu7.jpg';
import photo8 from './photos/lahu8.jpg';
import photo9 from './photos/lahu9.jpg';
import photo10 from './photos/lahu10.jpg';
import photo11 from './photos/lahu11.jpg';
import photo12 from './photos/lahu12.jpg';


export default function Lahu() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Lahu Thailand House Church"
        description="Lahu Thailand has 7 guys- but somehow the 2 girls in the house church have most of the brawn.
         We are the type of HC that loves enriching activities (roasting each other), profound debates (do you fold or crumple your toilet paper🤔?), and overall just spending time with each other! 
         Lahu is full of many different ✨unique✨personalities, so there’s definitely a bestie for you. 
        In summary, we love and support each other as well as enjoy living life together!!! Join us and there will never be a dull moment, only a fulfilling moment :D"
        shepPhoto1={shep1}
        shepName1="Rachel Armstrong"
        shepSchool1="Houston Community College"
        shepMajor1="Dental Hygiene"
        shepMessenger1="https://www.facebook.com/rachel.armstrong.52438"
        shepEmail1="mailto:i1abgr8@gmail.com"
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
