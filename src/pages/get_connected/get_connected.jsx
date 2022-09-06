import React from 'react';
import './get_connected_styles.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import logo from '../../images/pastor_eric_preach.png';
import swirl from '../../images/swirl.png';

function GetConnected() {
  return (
    <code>
      <div className = "top">
        <div className = "text">
          <div className = "header">
            <h1>Get Connected</h1>
            <img src={swirl}></img>
          </div>
          <p>
            Fill out the Google Form below to connect with us!<br></br>
            Ask us any questions. We would love to get to know you!
          </p>
        </div>
        <LeafImageContainerFaceRight photo={logo} className = "leaf" />
      </div>
      <div className="form">
        <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSdlbNjZfjqrhlnbwri8Yskf4HWr0Yj_L3HDGtVMWfV11-TnJg/viewform?embedded=true" width="640" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
    </code>
  );
}

export default GetConnected;
