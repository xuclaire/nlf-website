import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg'
import photo1 from './photos/amhat1.jpg';
import photo2 from './photos/amhat2.jpg';
import photo3 from './photos/amhat3.jpg';
import photo4 from './photos/amhatTemp.jpg';
import photo5 from './photos/amhatTemp.jpg';
import photo6 from './photos/amhatTemp.jpg';
import photo7 from './photos/amhatTemp.jpg';
import photo8 from './photos/amhatTemp.jpg';
import photo9 from './photos/amhatTemp.jpg';
import photo10 from './photos/amhatTemp.jpg';
import photo11 from './photos/amhatTemp.jpg';
import photo12 from './photos/amhatTemp.jpg';
//import main from './photos/main.jpeg';

export default function AMhat() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="A&M Harris and Teresa House Church"
        description="Welcome to Texas A&M HC! We are a juicy fella.
         We currently have around 30 members, so this is a great way to meet new people who also desire having a relationship with Jesus. 
        Come for the amazing praise, food, and people and stay for the many intimate encounters you will have with Jesus.  
        "
        shepPhoto1={shep1}
        shepName1="Harris Kwon"
        shepSchool1="A&M 2023"
        shepMajor1="Biomedical Engineering
        "
        shepMessenger1="https://www.facebook.com/profile.php?id=100066229213260"
        shepEmail1="mailto:harriskwon0323@tamu.edu"

        shepPhoto2={shep2}
        shepName2="Teresa Cho"
        shepSchool2="A&M 2025"
        shepMajor2="Biomedical Sciences
        "
        shepMessenger2="https://www.facebook.com/teresa.cho.3139"
        shepEmail2="mailto:harriskwon0323@tamu.edu"
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
