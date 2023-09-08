import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.JPG';
import photo1 from './photos/tunisia1.jpg';
import photo2 from './photos/tunisia2.jpg';
import photo3 from './photos/tunisia3.jpg';
import photo4 from './photos/tunisia4.jpg';
import photo5 from './photos/tunisia5.jpg';
import photo6 from './photos/tunisia6.jpg';
import photo7 from './photos/tunisia7.jpg';
import photo8 from './photos/tunisia8.jpg';
import photo9 from './photos/tunisia9.jpg';
import photo10 from './photos/tunisia10.jpg';
import photo11 from './photos/tunisia11.jpg';
import photo12 from './photos/tunisia12.jpg';

export default function Tunisia() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="Tunisia House Church"
        description="Tunisia currently has 7 members (4 big boys and 3 girls). 
        We’re a close group of friends who love to “story time” share and feast during late night expeditions. 
        Come experience *unique* personalities, engage in small brain talk, get built up in muscle and spirit, and satisfy your opulent palette as we live life together! "
        shepPhoto1={shep1}
        shepName1="Aubrey Cui"
        shepSchool1="Rice 2024"
        shepMajor1="Biochemistry and Sports Medicine"
        shepMessenger1="https://www.facebook.com/profile.php?id=100009510561807"
        shepEmail1="mailto:ayc7@rice.edu"

        shepPhoto2={shep2}
        shepName2="Jocelyn Lee"
        shepSchool2="Rice 2025"
        shepMajor2="Cell Biology and Genetics"
        shepMessenger2="https://www.facebook.com/profile.php?id=100070707546553"
        shepEmail2="mailto:jml26@rice.edu"
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
