import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg';
import photo1 from './photos/hyderabad1.jpg';
import photo2 from './photos/hyderabad2.jpg';
import photo3 from './photos/hyderabad3.jpg';
import photo4 from './photos/hyderabad4.jpg';
import photo5 from './photos/hyderabad5.jpg';
import photo6 from './photos/hyderabad6.jpg';
import photo7 from './photos/hyderabad7.jpg';
import photo8 from './photos/hyderabad8.JPG';
import photo9 from './photos/hyderabad9.JPG';
import photo10 from './photos/hyderabad10.JPG';
import photo11 from './photos/hyderabad11.jpg';
import photo12 from './photos/hyderabad12.jpg';
//import main from './photos/main.jpeg';

export default function Hyderabad() {
  return (
    <>
      <Header2
        photo={photo2}
        HCname="Hyderabad House Church"
        description="Hyderabad HC is a newly multiplied house church of 3 guys and 2 girls. 
        We love talking about anything and everything from how Puss in Boots 2 is the best animated movie, to deep convos that you think about at night. 
        We’re really chill, sometimes a lil out of pocket, but we’ve got plenty of love <3. The only thing we’re missing is YOU, join us for a chance to win a gift card.*
        (Gift card may or may not be included)
         
        "
        shepPhoto1={shep1}
        shepName1="Ric Chang"
        shepSchool1="Rice 2025"
        shepMajor1="Chemical and Biomolecular Engineering, Minor in Engineering Design"
        shepMessenger1="https://www.facebook.com/profile.php?id=100012188970478"
        shepEmail1="mailto: ec63@rice.edu"

        shepPhoto2={shep2}
        shepName2="Lia Kim"
        shepSchool2="Rice 2025"
        shepMajor2="Cognitive Science"
        shepMessenger2="https://www.facebook.com/lia.kim.357622"
        shepEmail2="mailto:lyk2@rice.edu"
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
