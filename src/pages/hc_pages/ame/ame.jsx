import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep1.jpg';
import photo1 from './photos/ameTemp.jpg';
import photo2 from './photos/ameTemp.jpg';
import photo3 from './photos/ameTemp.jpg';
import photo4 from './photos/ameTemp.jpg';
import photo5 from './photos/ameTemp.jpg';
import photo6 from './photos/ameTemp.jpg';
import photo7 from './photos/ameTemp.jpg';
import photo8 from './photos/ameTemp.jpg';
import photo9 from './photos/ameTemp.jpg';
import photo10 from './photos/ameTemp.jpg';
import photo11 from './photos/ameTemp.jpg';
import photo12 from './photos/ameTemp.jpg';
//import main from './photos/main.jpeg';

export default function AMe() {
  return (
    <>
      <Header
        photo={photo4}
        HCname="A&M - Ethan House Church"
        description="Laos is small but mighty, with 1 girl and 3 guys!
         We love post-HC late night, hanging out with the besties, getting mad gains (in faith too!), and taking fat L’s (for Laos)--
         but what we love more is the fellowship that comes with doing life with the Laos besties! 
         Join us for fun nights of cooking and eating great food; deep, insightful, and encouraging convos; 
         and lifelong relationships with a community that loves and supports you, no matter where you are in life. 
        "
        shepPhoto1={shep}
        shepName1="Ethan Chang"
        shepSchool1="A&M 2026"
        shepMajor1="idk"
        shepMessenger1="https://www.facebook.com/profile.php?id=100010629520539"
        shepEmail1="mailto:ccx1@rice.edu"
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
