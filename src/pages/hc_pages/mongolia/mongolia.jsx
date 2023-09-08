import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg';
import photo1 from './photos/Mongolia1.jpg';
import photo2 from './photos/Mongolia2.jpg';
import photo3 from './photos/Mongolia3.jpg';
import photo4 from './photos/Mongolia4.jpg';
import photo5 from './photos/Mongolia5.jpg';
import photo6 from './photos/Mongolia6.jpg';
import photo7 from './photos/Mongolia7.jpg';
import photo8 from './photos/Mongolia8.jpg';
import photo9 from './photos/Mongolia9.jpg';
import photo10 from './photos/Mongolia10.jpg';
import photo11 from './photos/Mongolia13.jpg';
import photo12 from './photos/Mongolia14.jpg';


export default function Mongolia() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="Mongolia House Church"
        description="Mongolia is a gentle and loving family of 4 girls and 3 guys. 
        We might seem shy at first, but once you get to know us you’ll discover our humor:) 
        Join us for deep convos, picnics at Hermann park, ice skating and more! We can’t wait to love God together with you.
        "
        shepPhoto1={shep1}
        shepName1="Tyler Braito"
        shepSchool1="Rice 2024"
        shepMajor1="Linguistics"
        shepMessenger1="https://www.facebook.com/profile.php?id=100013129029799"
        shepEmail1="mailto:ttb2@rice.edu"

        shepPhoto2={shep2}
        shepName2="Oriana Tang"
        shepSchool2="Rice 2025"
        shepMajor2="Neuroscience"
        shepMessenger2="https://www.facebook.com/oreoreo03"
        shepEmail2="mailto:ot11@rice.edu"
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
