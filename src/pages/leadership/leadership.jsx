import React, { useState } from 'react';
import './leadership_styles.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import LeadershipTopPic from '../../images/leadership_title.jpeg';
import PastorCard from '../../shared-components/pastorCard';
import PastorModal from '../../shared-components/pastorModal';
import PastorEricPic from '../../images/pastor_eric_bio.jpg';
import PastorSangPic from '../../images/pastor_sang_bio.jpeg';
import PastorJustyPic from '../../images/pastor_justy_bio.jpeg';
import CollegeVolunteers from '../../images/College_Volunteers.JPG';
import ShepherdProfile from '../../shared-components/shepherdProfile';


import AubreyPic from '../../images/aubrey_cui.jpg';
import AudreyPic from '../../images/audrey_lee.jpg';
import BrianPic from '../../images/brain_seo.jpg';
import ClayPic from '../../images/clay_murphy.jpg';
import DamianPic from '../../images/damian_andaya.jpeg';
import DerekPic from '../../images/derek_liang.jpg';
import GospelPic from '../../images/gospel_ibe.jpg';
import HarrisPic from '../../images/harris_kwon.jpg';
import JacobPic from '../../images/jacob_lee.jpg';
import JefferyPic from '../../images/jeffery_huang.jpg';
import JessicaPic from '../../images/jessica_suh.jpg';
import JJPic from '../../images/jj_lee.jpg';
import JocelynPic from '../../images/jocelyn_lee.jpg';
import JoshPic from '../../images/josh_ni.jpeg';
import KaitlynPic from '../../images/kaitlyn_kim.jpg';
import LiaPic from '../../images/lia_kim.jpg';
import OrianaPic from '../../images/oriana_tang.jpg';
import RachelPic from '../../images/rachel_armstrong.jpg';
import RebekahPic from '../../images/rebekah_heo.jpg';
import RicPic from '../../images/ric_chang.jpg';
import SarahPic from '../../images/sarah_eunsu_kim.jpg';
import TaehoPic from '../../images/taeho_choe.jpg';
import TchinPic from '../../images/teresa_chin.jpg';
import TchoPic from '../../images/teresa_cho.jpg';
import TylerPic from '../../images/tyler_braito.jpg';




function Leadership() {
  const [showPE, setShowPE] = useState(false);
  const [showPSang, setShowPSang] = useState(false);
  const [showJusty, setShowJusty] = useState(false);
  function handlePEToggle() {
    if (showPE) {
      setShowPE(false);
    } else {
      setShowPE(true);
      setShowPSang(false);
      setShowJusty(false);
    }
  }
  function handlePSangToggle() {
    if (showPSang) {
      setShowPSang(false);
    } else {
      setShowPSang(true);
      setShowPE(false);
      setShowJusty(false);
    }
  }
  function handleJustyToggle() {
    if (showJusty) {
      setShowJusty(false);
    } else {
      setShowJusty(true);
      setShowPE(false);
      setShowPSang(false);
    }
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
          <div className="pastor-eric-box" onClick={handlePEToggle}>
            <PastorCard photo={PastorEricPic} name={'Pastor Eric Shin'} role={'Senior Pastor'} />
          </div>
          <div className="pastor-sang-box" onClick={handlePSangToggle}>
            <PastorCard photo={PastorSangPic} name={'Pastor Sang Kevin Chon'} role={'College Pastor'} />
          </div>
          <div className="pastor-justy-box" onClick={handleJustyToggle}>
            <PastorCard photo={PastorJustyPic} name={'Justy Chon'} role={'Pastor\'s Wife'} />
          </div>
        </div>
        <div className="pastor-modals">
          <div className="pe-modal" onClick={handlePEToggle}>
            {showPE && (
              <PastorModal
                photo={PastorEricPic}
                name="Pastor Eric Shin"
                role="Senior Pastor"
                bio="As the Senior Pastor at New Life, Eric Shin has founded the church together with about twenty members on August 10, 1997. He grew up in New York City and was saved at the age of eighteen at a youth conference. After experiencing joys and challenges of following Christ and serving in His local church during high school and college years, he left behind aspirations of being a lawyer in his hometown and followed God’s call to seminary. Pastor Eric (affectionately known as PE) pastored a church in Boston for several years before coming to New Life with his lovely wife Lynette and their three children, Enoch, Caleb, and Josiah."
              />
            )}
          </div>
          <div className="psang-modal" onClick={handlePSangToggle}>
            {showPSang && (
              <PastorModal
                photo={PastorSangPic}
                name="Pastor Sang"
                role="College Pastor"
                bio="Pastor Sang Chon joined New Life Fellowship as a member in 2004 and, prior to becoming New Life Fellowship’s College Pastor, had been a house church shepherd at New Life for 12 years.  While Pastor Sang lived in different cities (Calgary, Pittsburg, and Chicago) throughout his childhood, he spent the majority of his life in Houston, Texas and accepted Christ in high school through an outreach ministry called YoungLife.  After Pastor Sang graduated from the University of Texas in Austin with a B.S. in Electrical Engineering, he worked in the semiconductor industry in design and marketing for 20 years. In 2019, after much prayer and deliberation, Pastor Sang obeyed God’s calling to full-time ministry as New Life’s College Pastor.  Currently he is pursuing his M.Div. degree at Southwestern Baptist Theological Seminary."
              />
            )}
          </div>
          <div className="justy-modal" onClick={handleJustyToggle}>
            {showJusty && (
              <PastorModal
                photo={PastorJustyPic}
                name="Justy Chon"
                role="Pastor's Wife"
                bio="Justy Chon has been a member of New Life Fellowship since 2000. She has spent over 15 years as a shepherd of house church. Justy accepted Jesus at a very young age in Seoul, Korea but dedicated her life to God when she first came to New Life. Justy received her Bachelor’s degree in Philosophy at the University of Texas in Austin. Pastor Sang and Justy have been married for 17 years and enjoy spending time with their 2 children: Eli and Gracie."
              />
            )}
          </div>
        </div>
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
            <ShepherdProfile photo={AubreyPic} name={'Aubrey Cui'} house_church={'Tunisia'} link="/tunisia" />
            <ShepherdProfile photo={AudreyPic} name={'Audrey Lee'} house_church={'North Egypt'} link="/north_egypt" />
            <ShepherdProfile photo={BrianPic} name={'Brian Seo'} house_church={'North Egypt'} link="/north_egypt" />
            <ShepherdProfile photo={ClayPic} name={'Clay Murphy'} house_church={'Indonesia'} link="/indonesia" />
            <ShepherdProfile photo={DamianPic} name={'Damian Andaya'} house_church={'North Africa'} link="/north_africa" />
            <ShepherdProfile photo={DerekPic} name={'Derek Liang'} house_church={'Laos'} link="/laos" />
            <ShepherdProfile photo={GospelPic} name={'Gospel Ibe'} house_church={'Siem Reap'} link="/siem_reap" />
            <ShepherdProfile photo={HarrisPic} name={'Harris Kwon'} house_church={'A&M Harris and Teresa'} link="/A&M-hat" />
            <ShepherdProfile photo={JacobPic} name={'Jacob Lee'} house_church={'Jacob Lee'} link="/jacoblee" />
            <ShepherdProfile photo={JefferyPic} name={'Jeffery Huang'} house_church={'Manado'} link="/manado" />
            <ShepherdProfile photo={JessicaPic} name={'Jessica Suh'} house_church={'Indonesia'} link="/indonesia" />
            <ShepherdProfile photo={JJPic} name={'JJ Lee'} house_church={'Delhi'} link="/delhi" />
            <ShepherdProfile photo={JocelynPic} name={'Jocelyn Lee'} house_church={'Tunisia'} link="/tunisia" />
            <ShepherdProfile photo={JoshPic} name={'Josh Ni'} house_church={'Kyrgyzstan'} link="/kyrgyzstan" />
            <ShepherdProfile photo={KaitlynPic} name={'Kaitlyn Kim'} house_church={'Delhi'} link="/delhi" />
            <ShepherdProfile photo={LiaPic} name={'Lia Kim'} house_church={'Hyderabad'} link="/hyderabad" />
            <ShepherdProfile photo={OrianaPic} name={'Oriana Tang'} house_church={'Mongolia'} link="/mongolia" />
            <ShepherdProfile photo={RachelPic} name={'Rachel Armstrong'} house_church={'Lahu Thailand'} link="/lahu" />
            <ShepherdProfile photo={RebekahPic} name={'Rebekah Heo'} house_church={'Chiang Mai University'} link="/cmu" />
            <ShepherdProfile photo={RicPic} name={'Ric Chang'} house_church={'Hyderabad'} link="/hyderabad" />
            <ShepherdProfile photo={SarahPic} name={'Sarah Eunsu Kim'} house_church={'Laos'} link="/laos" />
            <ShepherdProfile photo={TaehoPic} name={'Taeho Choe'} house_church={'Phnom Penh'} link="/phnom_penh" />
            <ShepherdProfile photo={TchinPic} name={'Teresa Chin'} house_church={'Anatolia'} link="/anatolia" />
            <ShepherdProfile photo={TchoPic} name={'Teresa Cho'} house_church={'A&M Harris and Teresa'} link="/A&M-hat" />
            <ShepherdProfile photo={TylerPic} name={'Tyler Braito'} house_church={'Mongolia'} link="/mongolia" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
