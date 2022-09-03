import React from 'react';

import Header from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpg';
import shep2 from './photos/susan.jpeg';
import photo1 from './photos/Main.JPG';
import photo2 from './photos/NA2.JPG';
import photo3 from './photos/NA3.jpg';
import photo4 from './photos/NA4.jpg';
import photo5 from './photos/NA5.JPG';
import photo6 from './photos/NA6.jpg';
import photo7 from './photos/NA7.jpg';
import photo8 from './photos/NA8.jpg';
import photo9 from './photos/NA9.jpg';
import photo10 from './photos/NA10.jpg';
import photo11 from './photos/NA11.jpg';
import photo12 from './photos/NA12.jpg';


export default function UofH() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="University of Houston House Church"
        description="TBD consists of mostly on-campus students at the University of Houston.
        If you want to get BIG, learn to DANCE, HOOP, or just want to SMOOCH a brother join
        us! We have some mad thinkers in this HC so don’t be afraid to ask questions about
        your faith. You are also always welcome at the WANG-OU residence. Let’s dive into
        the Good Book shall we?"
        shepPhoto1={shep2}
        shepName1="Susan Do"
        shepSchool1="Post Bacc @ Baylor College of Medicine"
        shepMajor1=" Biomedical Sciences + Health Equity"
        shepMessenger1="https://www.facebook.com/susan.do.52/"
        shepEmail1="mailto:suphdo1217@gmail.com"
        shepPhoto2={shep}
        shepName2="Eric Ou"
        shepSchool2="U of H 2023"
        shepMajor2="Biology, Minors in Medicine + Society"
        shepMessenger2="https://www.facebook.com/profile.php?id=100004900905211"
        shepEmail2="mailto:ericou328@gmail.com"
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
