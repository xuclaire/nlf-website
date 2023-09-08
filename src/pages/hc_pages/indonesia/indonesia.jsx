import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.JPG';
import shep2 from './photos/shep2.jpg';
import photo1 from './photos/indonesia1.jpeg';
import photo2 from './photos/indonesia2.jpeg';
import photo3 from './photos/indonesia3.jpeg';
import photo4 from './photos/indonesia4.jpeg';
import photo5 from './photos/indonesia5.jpeg';
import photo6 from './photos/indonesia6.jpeg';
import photo7 from './photos/indonesia7.jpeg';
import photo8 from './photos/indonesia8.jpeg';
import photo9 from './photos/indonesia9.JPG';
import photo10 from './photos/indonesia10.JPG';
import photo11 from './photos/indonesia11.JPG';
import photo12 from './photos/indonesia12.png';

export default function Indonesia() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="Indonesia House Church"
        description="Indonesia House Church is home to 5 members: 3 guys and 2 girls. 
        Although we are a new house church, recently multiplied from Phnom Penh, we have wisdom beyond our years… usually. 
        Come for the late night food runs (Taco Bell?), stay for the support, encouragement, accountability, and fellowship.
        "
        shepPhoto1={shep1}
        shepName1="Clay Murphy"
        shepSchool1="Rice 2025"
        shepMajor1="Chemical and Biomolecular Engineering"
        shepMessenger1="https://www.facebook.com/profile.php?id=100070211454943"
        shepEmail1="mailto:jcm23@rice.edu"

        shepPhoto2={shep2}
        shepName2="Jessica Suh"
        shepSchool2="Rice 2025"
        shepMajor2="Cell Biology and Genetics, Pre-Med"
        shepMessenger2="https://www.facebook.com/profile.php?id=100013818245433"
        shepEmail2="mailto:jms34@rice.edu"
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
