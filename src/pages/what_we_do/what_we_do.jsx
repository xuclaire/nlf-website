import React from 'react';
import './what_we_do_styles.css';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';

import LeafImageContainerFaceLeft from '../../shared-components/leafImageContainerFaceLeft';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';

function WhatWeDo() {
  return (
    <>
      <div className="section1">
        <div className="header1">
        <h1>What is New Life?</h1>
        <p>New Life college house churches that meet on Rice and UH campuses. <br></br>Although students at Rice and the University of Houston do not physically <br></br>meet in homes from week to week, they do meet as a house church every <br></br>Friday on campus to share lives together. Then on Sundays, Rice and UH students <br></br>come to the New Life church building and worship with the other <br></br>75+ house churches that make up the New Life church body.</p>
        <a href='/overview'><button>Learn About House Church</button></a>
        </div>
        <LeafImageContainerFaceRight
          photo={pic1} 
        />
      </div>
      <div className="section2">
        <div className="leaf2">
        <LeafImageContainerFaceLeft
          photo={pic2} 
        />
        </div>
        <div className="header2">
        <h1>We make disciples and model life with Christ through house church.</h1>
        </div>
      </div>
      <div className="section3">
        <div className="header3">
        <h1>New Life Fellowship Church</h1>
        <p>New Life Fellowship (NLF) is committed to building the <br></br>body of Christ as modeled by the New Testament. We often read <br></br>in the book of Acts as well in Paul’s letters the early <br></br>believers meeting regularly as a house church. We often say <br></br>at our church that if the 75+ house churches did not exist <br></br>we would not have a church.  </p>
        <div className="buttons">
        <a href='https://nlfhtx.org'><button>New Life Fellowship Church</button></a>
        <a href='https://tinyurl.com/nlfricerides'><button className="ridebutton">Sign up for a Ride to Church!</button></a>
        </div>
        </div>
        <LeafImageContainerFaceRight
          photo={pic3} 
        />
      </div>
    </>
  );
}
      
export default WhatWeDo;
      