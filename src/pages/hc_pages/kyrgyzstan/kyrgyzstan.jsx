import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpeg';
import photo1 from './photos/kyrgyzstan1.jpg';
import photo2 from './photos/kyrgyzstan2.jpg';
import photo3 from './photos/kyrgyzstan3.jpg';
import photo4 from './photos/kyrgyzstan4.jpg';
import photo5 from './photos/kyrgyzstan5.jpg';
import photo6 from './photos/kyrgyzstan6.jpg';
import photo7 from './photos/kyrgyzstan7.jpg';
import photo8 from './photos/kyrgyzstan8.jpg';
import photo9 from './photos/kyrgyzstan9.jpg';
import photo10 from './photos/kyrgyzstan10.jpg';
import photo11 from './photos/kyrgyzstan11.jpg';
import photo12 from './photos/kyrgyzstan12.jpg';

export default function Kyrgyzstan() {
  return (
    <>
      <Header
        photo={photo10}
        HCname="Kyrgyzstan House Church"
        description="Kyrgyzstan HC has 10 members (5 girls and 5 guys)! 
        We are a *very very very* chill group that deeply loves and supports every member through the highs and lows of life! 
        Come join for LOTS of great cooking and food, deep convos with a campfire video playing in the background, and a community that strives to help each other to grow closer to Jesus! 
        We love because he first loved us :)  
        "
        shepPhoto1={shep1}
        shepName1="Josh Ni"
        shepSchool1="Rice 2024"
        shepMajor1="Sports Medicine and Exercise Physiology, Pre-Med"
        shepMessenger1="https://www.facebook.com/profile.php?id=100006375335631"
        shepEmail1="mailto: josh.w.ni33@gmail.com"
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
