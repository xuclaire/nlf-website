import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpeg';
import photo1 from './photos/Mongolia1.jpg';
import photo2 from './photos/Mongolia2.jpg';
import photo3 from './photos/Mongolia3.jpg';
import photo4 from './photos/Mongolia4.jpg';
import photo5 from './photos/Mongolia5.jpg';
import photo6 from './photos/Mongolia6.jpg';
import photo7 from './photos/Mongolia7.jpg';
import photo8 from './photos/Mongolia8.jpg';


export default function Mongolia() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Mongolia House Church"
        description="Mongolia
       HC consists of 6 girls and 5 guys! We are a chaotic yet fun loving
        bunch! Come join us in the best house church to eat late night taco bell,
        worship God, and be a bit crazy sometimes <3 We would love to have you :)
        Ls for Mongolia
      ! Our hc verse is 1 John 4:19 - ‘We love because He first loved us.’
        "
        shepPhoto1={shep}
        shepName1="Aaron Lin"
        shepSchool1="Rice 2023"
        shepMajor1="Biochemistry and Cell Biology, ROTC"
        shepMessenger1="https://www.facebook.com/aaron1in"
        shepEmail1="mailto:aaron.lin@rice.edu"
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
      />
    </>
  );
}
