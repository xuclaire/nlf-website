import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep2 from '../../../images/josh_ni.jpeg';
import shep from '../../../images/kristine_yuan.jpeg';
// import shep from './photos/shep.JPG';
// import shep2 from './photos/shep2.JPG';
import photo1 from './photos/siemreap1.JPG';
import photo2 from './photos/siemreap2.JPG';
import photo3 from './photos/siemreap3.JPG';
import photo4 from './photos/siemreap4.JPG';
import photo5 from './photos/siemreap5.JPG';
import photo6 from './photos/siemreap6.JPG';
import photo7 from './photos/siemreap7.JPG';
import photo8 from './photos/siemreap8.JPG';
import photo9 from './photos/siemreap9.JPG';
import photo10 from './photos/siemreap10.JPG';
import photo11 from './photos/siemreap11.JPG';
import photo12 from './photos/siemreap12.JPG';
import photo13 from './photos/siemreap13.JPG';

export default function SiemReap() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="Siem Reap House Church"
        description="Siem Reap HC consists of 12 members, 5 girls and 7 guys. We are carefree
        and chaotic on the outside (refer to photos for details), but on the inside we highkey
        love deep talks and farts.
        "
        shepPhoto1={shep}
        shepName1="Kristine Yuan"
        shepSchool1="Rice 2023"
        shepMajor1="Sports Medicine and Exercise Physiology"
        shepMessenger1="https://www.facebook.com/kristine.yuan.5/"
        shepEmail1="mailto:kty1@rice.edu"
        shepPhoto2={shep2}
        shepName2="Josh Ni"
        shepSchool2="Rice 2024"
        shepMajor2="Sports Medicine and Exercise Physiology"
        shepMessenger2="https://www.facebook.com/profile.php?id=100010629520539"
        shepEmail2="mailto:jwn3@rice.edu"
      />
      <PhotoGallery
        photo1={photo13}
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
