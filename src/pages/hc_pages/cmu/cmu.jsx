import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpg';
import photo1 from './photos/CMU1.jpeg';
import photo2 from './photos/CMU2.jpeg';
import photo3 from './photos/CMU3.jpeg';
import photo4 from './photos/CMU4.JPG';
import photo5 from './photos/CMU5.jpg';
import photo6 from './photos/CMU6.jpg';
import photo7 from './photos/CMU7.jpg';
import photo8 from './photos/CMU8.jpg';
import photo9 from './photos/CMU9.jpg';
import photo10 from './photos/CMU10.jpg';
import photo11 from './photos/CMU11.jpg';
import photo12 from './photos/CMU12.jpg';

export default function CMU() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Chiang Mai University House Church"
        description="We have 4 guys and 3 girls with a good mix of health and comp sci majors (more variety welcome) 
        CMU easily goes from 0 to 100 and loves to roast *cough* lightly toast one another 
        REQUIREMENTS:
        Musical talent is not a requirement but it is a sprinkle (more details on scoops and sprinkles provided should you visit)
        There’s more but you have to visit first :D"
        shepPhoto1={shep}
        shepName1="Rebekah Heo"
        shepSchool1="Rice 2024"
        shepMajor1="Neuroscience"
        shepMessenger1="https://www.facebook.com/rebekah.heo"
        shepEmail1="mailto:rjh10@rice.edu"
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
