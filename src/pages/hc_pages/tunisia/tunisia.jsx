import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpeg';
import photo1 from './photos/Tunisia1.jpg';
import photo2 from './photos/Tunisia2.jpg';
import photo3 from './photos/Tunisia3.JPG';
import photo4 from './photos/Tunisia4.JPG';
import photo5 from './photos/Tunisia5.JPG';
import photo6 from './photos/Tunisia6.jpg';
import photo7 from './photos/Tunisia7.jpg';
import photo8 from './photos/Tunisia8.jpg';
import photo9 from './photos/Tunisia9.jpg';
import photo10 from './photos/Tunisia10.jpg';
import photo11 from './photos/Tunisia11.JPG';
import photo12 from './photos/Tunisia12.jpg';

export default function Tunisia() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Tunisia House Church"
        description="Tunisia HC consists of 11 members (6 girls and 5 boys), we’re
        funny and easily distracted. Think of us as siblings that like to
        chill and hang out with each other. It’s very much a controlled chaos kinda environment.
        And we’re built different."
        shepPhoto1={shep}
        shepName1="Peter Chung"
        shepSchool1="Rice 2023"
        shepMajor1="Sport Management, Minor in Business"
        shepMessenger1="https://www.facebook.com/profile.php?id=100009238959197"
        shepEmail1="mailto:jpc8@rice.edu"
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
