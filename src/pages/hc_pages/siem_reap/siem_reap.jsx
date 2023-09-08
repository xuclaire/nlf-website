import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.JPG';
// import shep from './photos/shep.JPG';
// import shep2 from './photos/shep2.JPG';
import photo1 from './photos/srhc1.JPG';
import photo2 from './photos/srhc2.JPG';
import photo3 from './photos/srhc3.JPG';
import photo4 from './photos/srhc4.JPG';
import photo5 from './photos/srhc5.JPG';
import photo6 from './photos/srhc6.JPG';
import photo7 from './photos/srhc7.JPG';
import photo8 from './photos/srhc8.JPG';
import photo9 from './photos/srhc9.jpg';
import photo10 from './photos/srhc10.JPG';
import photo11 from './photos/srhc11.JPG';
import photo12 from './photos/srhc12.JPG';

export default function SiemReap() {
  return (
    <>
      <Header
        photo={photo5}
        HCname="Siem Reap House Church"
        description="Siem Reap is a family of 3 girls and 4 guys. 
        We’re chaotic good and very silly goofy at times.
         We love God and we love food, and you’ll be sure to have a fantastic time with us and our many hobbies. 
         Siem ball, siem weep, siem sing, whatever you wanna see!
        "
        shepPhoto1={shep1}
        shepName1="Gospel Ibe"
        shepSchool1="Rice 2024"
        shepMajor1="Sports Medicine and Exercise Physiology, Pre-Med"
        shepMessenger1="https://www.facebook.com/gospel.ibe.1"
        shepEmail1="mailto:gii1@rice.edu"
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
