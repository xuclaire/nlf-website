import React from 'react';
import './summer_hc_styles.css';
import pic from '../../images/summerhc_pic.png';

function SummerHC() {
  return (
    <>
      <div className = "top">
        <h1>Summer House Church</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <button>Register for Summer House Church</button>
        <LeafImageContainerFaceRight
          photo={pic} 
        />
      </div>
      <div className = "video"> 
        <iframe width="720" height="500" src="https://www.youtube.com/embed/j_jKthziPG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  );
}

export default SummerHC;