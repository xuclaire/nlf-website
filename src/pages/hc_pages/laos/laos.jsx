import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpeg';
import photo1 from './photos/Laos1.jpeg';
import photo2 from './photos/Laos2.jpeg';
import photo3 from './photos/Laos3.jpeg';
import photo4 from './photos/Laos4.jpeg';
import photo5 from './photos/Laos5.jpeg';
import photo6 from './photos/Laos6.jpeg';
import photo7 from './photos/Laos7.jpeg';
import photo8 from './photos/Laos8.jpeg';
import photo9 from './photos/Laos9.jpeg';
import photo10 from './photos/Laos10.jpeg';
import photo11 from './photos/Laos11.jpeg';
import photo12 from './photos/Laos12.jpeg';
import main from './photos/main.jpeg';

export default function Laos() {
  return (
    <>
      <Header
        photo={main}
        HCname="Laos House Church"
        description="Laos HC consists of 6 girls and 5 guys! We are a chaotic yet fun loving
        bunch! Come join us in the best house church to eat late night taco bell,
        worship God, and be a bit crazy sometimes <3 We would love to have you :)
        Ls for Laos! Our hc verse is 1 John 4:19 - ‘We love because He first loved us.’
        "
        shepPhoto1={shep}
        shepName1="Claire Xu"
        shepSchool1="Rice 2023"
        shepMajor1="Computer Science, Minors in Business and Data Science
        "
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
