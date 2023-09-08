import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep1 from './photos/shep1.jpg';
import photo1 from './photos/pphc1.jpg';
import photo2 from './photos/pphc2.jpeg';
import photo3 from './photos/pphc3.jpg';
import photo4 from './photos/pphc4.JPG';
import photo5 from './photos/pphc5.JPG';
import photo6 from './photos/pphc6.JPG';
import photo7 from './photos/pphc7.jpg';
import photo8 from './photos/pphc8.JPG';
import photo9 from './photos/pphc9.jpeg';
import photo10 from './photos/pphc10.jpeg';
import photo11 from './photos/pphc11.JPG';
import photo12 from './photos/pphc12.jpg';

export default function PhnomPenh() {
  return (
    <>
      <Header
        photo={photo4}
        HCname="Phnom Penh House Church"
        description="Phnom Penh consists of 6 members (4 girls 👩 and 2 guys 🧔‍♂️) with a diverse range of personalities 🤩 and talents 🎼 📷 💃. 
        We are a group of unique individuals who like to troll 😝 each other for fun but are also loving ♥️ and supportive 🤝 of each other and are not afraid to share deeply 🗣️ about our life and our faith ✝️ 🙏🏼. 
        Join our house church for deeeepp convos 🤓, good vibes 🤙😎, and growth in our walk with the holy spirit 🔥👻 🚶💨 with the most amazing and loving house church members⛪️ 👨‍👩‍👧‍👦 🫶.
        "
        shepPhoto1={shep1}
        shepName1="Taeho Cho"
        shepSchool1="Rice 2025"
        shepMajor1="Computer Science and Cognitive Science"
        shepMessenger1="https://www.facebook.com/taeho.choe.10"
        shepEmail1="mailto: tc71@rice.edu"
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
