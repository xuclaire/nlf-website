import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep1.jpg';
import photo1 from './photos/NAHC1.jpg';
import photo2 from './photos/NAHC2.jpg';
import photo3 from './photos/NAHC3.jpg';
import photo4 from './photos/NAHC4.jpg';
import photo5 from './photos/NAHC5.jpg';
import photo6 from './photos/NAHC6.jpg';
import photo7 from './photos/NAHC7.jpg';
import photo8 from './photos/NAHC8.jpg';
import photo9 from './photos/nahc9.jpg';
import photo10 from './photos/nahc10.jpg';
import photo11 from './photos/nahc11.jpg';
import photo12 from './photos/nahc12.jpg';

export default function NorthAfrica() {
  return (
    <>
      <Header
        photo={photo4}
        HCname="North Africa House Church"
        description="North Africa House Church is currently home to 5 members (3 boys and 2 girls). We love to play board games, find places around the Houston area to eat, go on late
        night boba runs, road trips, and more. Come join us for the food and fun and stay for the fellowship, growth, and Jesus.
        "
        shepPhoto1={shep}
        shepName1="Damian Andaya"
        shepSchool1="University of Houston 2023"
        shepMajor1="Computer Science, Minors in Mathematics and Chemistry"
        shepMessenger1="https://www.facebook.com/damian.hyunwoo"
        shepEmail1="mailto:fdandaya@gmail.com"
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
