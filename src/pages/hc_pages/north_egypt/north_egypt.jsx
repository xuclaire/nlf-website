import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';

import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpeg';
import photo1 from './photos/nehc1.jpg';
import photo2 from './photos/nehc2.jpg';
import photo3 from './photos/nehc3.jpg';
import photo4 from './photos/nehc4.jpg';
import photo5 from './photos/nehc5.jpg';
import photo6 from './photos/nehc6.jpg';
import photo7 from './photos/nehc7.jpg';
import photo8 from './photos/nehc8.jpg';
import photo9 from './photos/nehc9.jpg';
import photo10 from './photos/nehc10.jpg';
import photo11 from './photos/nehc11.jpg';
import photo12 from './photos/nehc12.jpg';


export default function NorthEgypt() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="North Egypt House Church"
        description="North Egypt has 7 members (3 girls and 4 boys) who are friends by chance, not by choice :D 
        With an assortment of personalities, our hc never has a dull moment between the goofy moments and the savage comments. 
        Despite our differences, we somehow get along (only by God’s grace) as we bond over playing the banana game, munching on cereal, and struggling to choose late night food. 
        Don’t let our chaotic first impressions stop you from seeing the genuine love and support we have for each other. Choose NE House Church!"
        shepPhoto1={shep1}
        shepName1="Brian Seo"
        shepSchool1="Rice 2025"
        shepMajor1="Mechanical Engineering"
        shepMessenger1="https://www.facebook.com/brian.seo.716"
        shepEmail1="mailto:bs76@rice.edu"

        shepPhoto2={shep2}
        shepName2="Audrey Lee"
        shepSchool2="Rice 2025"
        shepMajor2="Neuroscience"
        shepMessenger2="https://www.facebook.com/profile.php?id=100049653512805"
        shepEmail2="mailto:al99@rice.edu"

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
