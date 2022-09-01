import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';

import shep from './photos/shep.png';
import photo1 from './photos/CentralJapan1.jpeg';
import photo2 from './photos/CentralJapan2.jpeg';
import photo3 from './photos/CentralJapan3.jpeg';
import photo4 from './photos/CentralJapan4.jpeg';
import photo5 from './photos/CentralJapan5.jpeg';
import photo6 from './photos/CentralJapan6.jpeg';
import photo7 from './photos/CentralJapan7.jpeg';
import photo8 from './photos/CentralJapan8.jpeg';
import photo12 from './photos/CentralJapanMain.jpeg';

export default function CentralJapan() {
  return (
    <>
      <Header
        photo={photo12}
        HCname="Central Japan House Church"
        description="Lots of us study Computer Science, but we actually have representation
          for each of the academic schools (Engineering, Social Sciences, etc.)!
          All of our members end up in the Silicon Valley after grad so if you’re
          Bay bound look no further. Come for the unique board games (sushi GO,
          poker, bananagrams, word puzzles), AYCE sushi runs, and spontaneous
          road trips…stay for the lifelong family members."
        shepPhoto1={shep}
        shepName1="Enoch Chen"
        shepSchool1="Rice 2022"
        shepMajor1="Economics"
        shepMessenger1="https://www.facebook.com/EKnockChen/"
        shepEmail1="mailto:ec48@rice.edu"
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
        photo12={photo12}
      />
    </>
  );
}
