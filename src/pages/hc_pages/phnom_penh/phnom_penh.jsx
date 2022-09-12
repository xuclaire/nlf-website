import React from 'react';

import Header2 from '../shared/header2';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import shep2 from './photos/shep2.jpg';
import photo1 from './photos/main.JPG';
import photo2 from './photos/PhnomPenh2.JPG';
import photo3 from './photos/PhonmPenh3.JPG';
import photo4 from './photos/PhnomPenh4.jpeg';
import photo5 from './photos/PhnomPenh5.JPG';
import photo6 from './photos/PhonmPenh6.png';
import photo7 from './photos/PhnomPenh7.jpg';
import photo8 from './photos/PhnomPenh8.jpg';
import photo9 from './photos/PhnomPenh9.JPG';
import photo10 from './photos/PhnomPenh10.JPG';
import photo11 from './photos/PhnomPenh11.JPG';
import photo12 from './photos/PhonmPenh12.jpg';

export default function PhnomPenh() {
  return (
    <>
      <Header2
        photo={photo1}
        HCname="Phnom Penh House Church"
        description="Phnom Penh (aka PP house church) is consisted of 7 girls and 4 boys
        and we are a very chill and loving bunch. Come join our love for popcorn,
        warm blankets, and back cracks.
        Our lake trip video- https://www.youtube.com/watch?v=qVDgpGp7iWg ;)
        Disclaimer: we have more than 2 guy members they just were not able to come on the trip
        "
        shepPhoto1={shep1}
        shepName1="Esther Lee"
        shepSchool1="Rice 2023"
        shepMajor1="Sports Medicine and Exercise Physiology"
        shepMessenger1="https://www.facebook.com/profile.php?id=100010478134308"
        shepEmail1="mailto:esl3@rice.edu"
        shepPhoto2={shep2}
        shepName2="George Hung"
        shepSchool2="Rice 2023"
        shepMajor2="Biosciences, Linguistics, Sports Medicine and Exercise Physiology"
        shepMessenger2="https://www.facebook.com/ghung1328/"
        shepEmail2="mailto:gah9@rice.edu"
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
