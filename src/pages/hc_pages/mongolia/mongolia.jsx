import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep.jpeg';
import photo1 from './photos/Mongolia1.jpg';
import photo2 from './photos/Mongolia2.jpg';
import photo3 from './photos/Mongolia3.jpg';
import photo4 from './photos/Mongolia4.jpg';
import photo5 from './photos/Mongolia5.jpg';
import photo6 from './photos/Mongolia6.jpg';
import photo7 from './photos/Mongolia7.jpg';
import photo8 from './photos/Mongolia8.jpg';
import photo9 from './photos/Mongolia9.jpg';
import photo10 from './photos/Mongolia10.jpg';
import photo11 from './photos/Mongolia13.jpg';
import photo12 from './photos/Mongolia14.jpg';


export default function Mongolia() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Mongolia House Church"
        description="Mongolia is the strongest House Church! Outside of the church and the classroom, 
        you can find many of our members at the gym, staying fit :) However, more than physical strength, 
        our house church is devoted to growing stronger in our walk with the Lord through prayer and fellowship. 
        We love hanging out together and learning to trust God by encouraging one another and lifting each other 
        up. Come visit Mongolia HC for a good laugh, a good time of sharing, and a place of spiritual rest; 
        we’d love to have you :) 1 Timothy 4:8: “For physical training is of some value, but godliness has 
        value for all things, holding promise for both the present life and the life to come."
        shepPhoto1={shep}
        shepName1="Aaron Lin"
        shepSchool1="Rice 2023"
        shepMajor1="Biochemistry and Cell Biology, ROTC"
        shepMessenger1="https://www.facebook.com/aaron1in"
        shepEmail1="mailto:aaron.lin@rice.edu"
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
