import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg'
import photo1 from './photos/laos1.jpeg';
import photo2 from './photos/laos2.jpeg';
import photo3 from './photos/laos3.jpeg';
import photo4 from './photos/laos4.jpeg';
import photo5 from './photos/laos5.jpeg';
import photo6 from './photos/laos6.jpeg';
import photo7 from './photos/laos7.jpeg';
import photo8 from './photos/laos8.jpeg';
import photo9 from './photos/laos9.jpeg';
import photo10 from './photos/Laos10.jpeg';
import photo11 from './photos/Laos11.jpeg';
import photo12 from './photos/Laos12.jpeg';
//import main from './photos/main.jpeg';

export default function Laos() {
  return (
    <>
      <Header2
        photo={photo4}
        HCname="Laos House Church"
        description="Laos is small but mighty, with 1 girl and 3 guys!
         We love post-HC late night, hanging out with the besties, getting mad gains (in faith too!), and taking fat L’s (for Laos)--
         but what we love more is the fellowship that comes with doing life with the Laos besties! 
         Join us for fun nights of cooking and eating great food; deep, insightful, and encouraging convos; 
         and lifelong relationships with a community that loves and supports you, no matter where you are in life. 
        "
        shepPhoto1={shep1}
        shepName1="Derek Liang"
        shepSchool1="Rice 2025"
        shepMajor1="Cell Biology and Genetics, Pre-Med
        "
        shepMessenger1="https://www.facebook.com/derek.1iang"
        shepEmail1="mailto:dl70@rice.edu"

        shepPhoto2={shep2}
        shepName2="Sarah Eunsu Kim"
        shepSchool2="Rice 2024"
        shepMajor2="Business Management, Minor in Asian Studies
        "
        shepMessenger2="https://www.facebook.com/sarah.kaeci"
        shepEmail2="mailto:ek34@rice.edu"
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
