import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';

import shep from './photos/shep1.JPG';
import photo1 from './photos/jlhc1.JPG';
import photo2 from './photos/jlhc2.JPG';
import photo3 from './photos/jlhc3.JPG';
import photo4 from './photos/jlhc4.JPG';
import photo5 from './photos/jlhc5.JPG';
import photo6 from './photos/jlhc6.JPG';
import photo7 from './photos/jlhc7.JPG';
import photo8 from './photos/jlhc8.JPG';
import photo9 from './photos/jlhc9.JPG';
import photo10 from './photos/jlhc10.JPG';
import photo11 from './photos/jlhc11.JPG'
import photo12 from './photos/jlhc12.JPG';

export default function Jacob() {
  return (
    <>
      <Header
        photo={photo12}
        HCname="Jacob Lee House Church"
        description="Not good with names? Don’t worry! 
        If you remember Jacob Lee HC, you’ve got almost half of us down. 
        As Mbappe said, we will be there no matter what, and between our 2 immaculate vibe queens and 5 spicy jesters, there’s plenty of banter in this house of God. 
        We hope you’ll join us in making merry with the one true King!
        "
        shepPhoto1={shep}
        shepName1="Jacob Lee"
        shepSchool1="Rice 2024"
        shepMajor1="Mechanacal Engineering"
        shepMessenger1="https://www.facebook.com/JacobLee283/"
        shepEmail1="mailto:jhl7@rice.edu"
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
