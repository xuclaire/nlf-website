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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>Learn About House Church</button>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="buttons">
        <button>New Life Fellowship Church</button>
        <button className="ridebutton">Sign up for a Ride to Church!</button>
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
      