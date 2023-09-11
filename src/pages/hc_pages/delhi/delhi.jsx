import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg';
import photo1 from './photos/delhi1.jpg';
import photo2 from './photos/delhi2.jpg';
import photo3 from './photos/delhi3.jpg';
import photo4 from './photos/delhi4.jpg';
import photo5 from './photos/delhi5.jpg';
import photo6 from './photos/delhi6.jpg';
import photo7 from './photos/delhi7.jpg';
import photo8 from './photos/delhi8.jpg';
import photo9 from './photos/delhi9.jpg';
import photo10 from './photos/delhi10.jpg';
import photo11 from './photos/delhi11.jpg';
import photo12 from './photos/delhi12.JPG';

export default function Delhi() {
  return (
    <>
      <Header2
        photo={photo4}
        HCname="Delhi House Church"
        description="Delhi has 5 members (2 girls and 3 boys) who love good food and fun board games (warning: we get a bit competitive ;) ).
         We share very deeply and enjoy supporting one another through all the ups and downs of college.
          We also enjoy roasting each other, but we promise it’s all out of love. Join our house church and we’ll delhiver the love to you!

        "
        shepPhoto1={shep1}
        shepName1="JJ Lee"
        shepSchool1="Rice University 2025"
        shepMajor1="Physics"
        shepMessenger1="https://www.facebook.com/andrewlee824"
        shepEmail1="mailto:jl266@rice.edu"

        shepPhoto2={shep2}
        shepName2="Kaitlyn Kim"
        shepSchool2="Rice University 2026"
        shepMajor2="Biology and Sports Medicine"
        shepMessenger2="https://www.facebook.com/kaitlyn.kim.716"
        shepEmail2="mailto:kk88@rice.edu"
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
