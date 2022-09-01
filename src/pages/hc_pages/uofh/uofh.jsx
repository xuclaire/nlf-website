import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpg';
import photo1 from './photos/Main.JPG';
import photo2 from './photos/NA2.JPG';
import photo3 from './photos/NA3.jpg';
import photo4 from './photos/NA4.jpg';
import photo5 from './photos/NA5.JPG';


export default function UofH() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="University of Houston House Church"
        description="TBD consists of 6 guys, 3 girls."
        shepPhoto1={shep}
        shepName1="Eric Ou"
        shepSchool1="U of H 2023"
        shepMajor1=" Biology, Minors in Medicine + Society"
        shepMessenger1="https://www.facebook.com/profile.php?id=100004900905211"
        shepEmail1="mailto:ericou328@gmail.com"
      />
      <PhotoGallery
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        photo4={photo4}
        photo5={photo5}
        // photo6={photo6}
        // photo7={photo7}
        // photo8={photo8}
        // photo9={photo9}
        // photo10={photo10}
        // photo11={photo11}
        // photo12={photo12}
      />
    </>
  );
}
