import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpg';
import photo1 from './photos/NAHC1.jpg';
import photo2 from './photos/NAHC2.jpg';
import photo3 from './photos/NAHC3.jpg';
import photo4 from './photos/NAHC4.jpg';
import photo5 from './photos/NAHC5.jpg';
import photo6 from './photos/NAHC6.jpg';
import photo7 from './photos/NAHC7.jpg';
import photo8 from './photos/NAHC8.jpg';
// import photo9 from './photos/NAHC9.jpg';
// import photo10 from './photos/NAHC10.jpg';
// import photo11 from './photos/NAHC11.jpg';
// import photo12 from './photos/NAHC12.jpg';
// import main from './photos/main.jpg';

export default function NorthAfrica() {
  return (
    <>
      <Header
        photo={photo2}
        HCname="North Africa House Church"
        description="We consist of 6 members, 1 female and 5 males
        We are a family full of fun, quirky, and unique (very unique) personalities.
        We have students from different campuses and in the surrounding Houston area (UH,
        Lonestar, HCC, etc.) and college aged young adults who are working as well.
        House church will mainly be hosted at people’s houses but sometimes on campus too.
        "
        shepPhoto1={shep}
        shepName1="Damian Andaya"
        shepSchool1="U of H 2023"
        shepMajor1="Computer Science + Math"
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
        // photo9={photo9}
        // photo10={photo10}
        // photo11={photo11}
        // photo12={photo12}
      />
    </>
  );
}
