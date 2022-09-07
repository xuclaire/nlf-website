import React, { useState } from 'react';
import './leadership_styles.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import LeadershipTopPic from '../../images/leadership_title.jpeg';
import PastorCard from '../../shared-components/pastorCard';
import PastorModal from '../../shared-components/pastorModal';
import PastorEricPic from '../../images/pastor_eric_bio.jpeg';
import PastorSangPic from '../../images/pastor_sang_bio.jpeg';
import PastorJustyPic from '../../images/pastor_justy_bio.jpeg';
import CollegeVolunteers from '../../images/College_Volunteers.JPG';
import ShepherdProfile from '../../shared-components/shepherdProfile';
import RebekahPic from '../../images/rebekah_heo.jpeg';
import AaronPic from '../../images/aaron_lin.jpeg';
import ChristinePic from '../../images/christine.jpeg';
import CiciPic from '../../images/cici_du.jpeg';
import ClairePic from '../../images/claire_xu.jpeg';
import DamianPic from '../../images/damian_andaya.jpeg';
import EnochPic from '../../images/enoch_chen.png';
import EricPic from '../../images/eric_ou.jpg';
import EstherPic from '../../images/esther_lee.jpeg';
import GeorgePic from '../../images/george_hung.jpeg';
import JoshPic from '../../images/josh_ni.jpeg';
import KristinePic from '../../images/kristine_yuan.jpeg';
import PeterPic from '../../images/peter_chung.jpeg';
import SusanPic from '../../images/susan.jpeg';

function Leadership() {
  const [showPE, setShowPE] = useState(true);
  function handleToggle() {
    return setShowPE((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <div className="title-section">
        <div className="leadership-header">
          <h1>Leadership</h1>
          <p className="description-text">Our leadership team consists of pastors, college volunteers, and shepherds!</p>
        </div>
        <LeafImageContainerFaceRight className="title-leaf-image" photo={LeadershipTopPic} />
      </div>
      <div className="meet-the-pastors-section">
        <h2 className="meet-the-pastors-title">Meet the Pastors</h2>
        <div className="pastor-bios">
          <div className="pastor-box" onClick={handleToggle}>
            <PastorCard photo={PastorEricPic} name={'Pastor Eric Shin'} role={'Senior Pastor'} />
            {showPE &&
              <PastorModal
                
                name="Pastor Eric Shin"
                role="Senior Pastor"
                bio="As the Senior Pastor at New Life, Eric Shin has founded the church together with about twenty members on August 10, 1997. He grew up in New York City and was saved at the age of eighteen at a youth conference. After experiencing joys and challenges of following Christ and serving in His local church during high school and college years, he left behind aspirations of being a lawyer in his hometown and followed God’s call to seminary. Pastor Eric (affectionately known as PE) pastored a church in Boston for several years before coming to New Life with his lovely wife Lynette and their three children, Enoch, Caleb, and Josiah."/>}
          </div>
          <div className="pastor-box">
            <PastorCard photo={PastorSangPic} name={'Pastor Sang'} role={'College Pastor'} />
          </div>
          <div className="pastor-box">
            <PastorCard photo={PastorJustyPic} name={'Pastor Justy'} role={'College Pastor'} />
          </div>
        </div>
        <div className="pastor-modals"></div>
      </div>
      <div className="meet-the-college-volunteers-section">
        <div className="meet-the-college-volunteers-header">
          <h2 className="college-volunteers-title">Meet the College Volunteers</h2>
          <body className="college-volunteers-description">
            College volunteers are adult members of New Life who support and relieve ministry burdens from the shepherds, ranging
            from event planning to even being a big brother or sister to college students.
          </body>
        </div>
        <img className="college-volunteers-pic" src={CollegeVolunteers} />
      </div>
      <div className="meet-the-shepherds-section">
        <div className="meet-the-shepherds-header">
          <h2 className="shepherds-title">Meet the Shepherds</h2>
          <body className="shepherds-description">
            Shepherds are the spiritual leaders of the house church who will lead and guide the house church until graduation. They
            are servant leaders who are intentionally growing to be more like the heart of Jesus.
          </body>
        </div>
        <div className="shepherd-profiles-center">
          <div className="shepherd-profiles">
            <ShepherdProfile photo={AaronPic} name={'Aaron Lin'} house_church={'Mongolia'} link="/mongolia" />
            <ShepherdProfile photo={ChristinePic} name={'Christine Lee'} house_church={'Manado'} link="/manado" />
            <ShepherdProfile photo={CiciPic} name={'Cici Du'} house_church={'Anatolia'} link="/anatolia" />
            <ShepherdProfile photo={ClairePic} name={'Claire Xu'} house_church={'Laos'} link="/laos" />
            <ShepherdProfile photo={DamianPic} name={'Damian Andaya'} house_church={'North Africa'} link="/north_africa" />
            <ShepherdProfile photo={EnochPic} name={'Enoch Chen'} house_church={'Central Japan'} link="/central_japan" />
            <ShepherdProfile photo={EricPic} name={'Eric Ou'} house_church={'U of H'} link="/uofh" />
            <ShepherdProfile photo={EstherPic} name={'Esther Lee'} house_church={'Phnom Penh'} link="/phnom_penh" />
            <ShepherdProfile photo={GeorgePic} name={'George Hung'} house_church={'Phnom Penh'} link="/phnom_penh" />
            <ShepherdProfile photo={JoshPic} name={'Josh Ni'} house_church={'Siem Reap'} link="/siem_reap" />
            <ShepherdProfile photo={KristinePic} name={'Kristine Yuan'} house_church={'Siem Reap'} link="/siem_reap" />
            <ShepherdProfile photo={PeterPic} name={'Peter Chung'} house_church={'Tunisia'} link="/tunisia" />
            <ShepherdProfile photo={RebekahPic} name={'Rebekah Heo'} house_church={'CMU'} link="/cmu" />
            <ShepherdProfile photo={SusanPic} name={'Susan Do'} house_church={'U of H'} link="/uofh" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
