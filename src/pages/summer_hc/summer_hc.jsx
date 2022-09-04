import React from 'react';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import './summer_hc_styles.css';
import pic from '../../images/summerhc_pic.png';

function SummerHC() {
  return (
    <>
      <div className = "top">
        <div className = "text">
          <h1>Summer House Church</h1>
          <p>For 10 weeks throughout the summer, college students meet in assigned <br></br>house churches in New Life’s church building.While many college students <br></br>will leave Houston for the summer, some will stay, and many students <br></br>from outside of Houston will return home and will need a house church <br></br>community to stay spiritually healthy. Summer college house <br></br>churches are carefully assigned every year and are composed of a mixture of <br></br>rising freshman to recently graduated seniors.  College students can expect 10 weeks <br></br>of great fellowship, worship, spiritual growth, and fun! </p>
          <button>Register for Summer House Church</button>
        </div>
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