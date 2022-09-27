import React from 'react';
import './overview.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import HousechurchCard from '../../shared-components/housechurchCard';
import TestimonyCard from '../../shared-components/testimonyCard';
import Anatolia from './images/Anatolia.jpg';
import CentralJapan from './images/CentralJapan.jpg';
import CMU from './images/CMU1.jpg';
import Laos from './images/Laos1.jpg';
import Manado from './images/MANADO_3.JPG';
import Mongolia from './images/Mongolia7.jpg';
import NA from './images/NA2.JPG';
import SA from './images/SA.JPG';
import Phnom from './images/PhnomPenh7.jpg';
import Siem from './images/SiemReap.JPG';
import Tunisia from './images/Tunisia1.jpg';
import overview from './images/overview.jpg';

export default function Overview() {
  return (
    <>
      <div className="overview-header-container">
        <div className="overview-header-text">
          <div className="overview-header">
            <h1>What is House Church?</h1>
          </div>
          <p>
            We at New Life define a house church as a community <br></br>
            that fulfills all the intrinsic purposes of the church.
          </p>
          <div className="video">
            <iframe
              width="837"
              height="515"
              src="https://www.youtube.com/embed/HhN2yuEVQuA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="dark_green_container">
        <div className="description-grid">
          <div className="description-text">
            <p className="overview-h">
              House churches are shepherded by a leader and are made up of 6-12 people meeting in each other’s homes at least once a
              week. We see the New Testament believers meeting in people’s homes because church was meant to be done in fellowship
              (koinonia) with one another.
            </p>

            <p className="overview-h2">
              Acts 2:46-47 states how the believers in the early church “broke bread in their homes and ate together with glad and
              sincere hearts, praising God.”
            </p>
          </div>
          <LeafImageContainerFaceRight photo={overview} />
        </div>
      </div>
      <div className="housechurch-container">
        <p className="housechurch-h">House Churches</p>
        <div className="housechurch_grid">
          <HousechurchCard photo={Anatolia} HC="Anatolia" link="/anatolia" />
          <HousechurchCard photo={CentralJapan} HC="Central Japan" link="/central_japan" />
          <HousechurchCard photo={CMU} HC="CMU" link="/cmu" />
          <HousechurchCard photo={Laos} HC="Laos" link="/laos" />
          <HousechurchCard photo={Manado} HC="Manado" link="/manado" />
          <HousechurchCard photo={Mongolia} HC="Mongolia" link="/mongolia" />
          <HousechurchCard photo={SA} HC="Lahu" link="/lahu" />
          <HousechurchCard photo={NA} HC="North Africa" link="/north_africa" />
          <HousechurchCard photo={Phnom} HC="Phnom Penh" link="/phnom_penh" />
          <HousechurchCard photo={Siem} HC="Siem Reap" link="/siem_reap" />
          <HousechurchCard photo={Tunisia} HC="Tunisia" link="/tunisia" />
        </div>
      </div>
      <div className="beige_container">
        <h4>Testimonies</h4>
        <div className="testimony_grid">
          <TestimonyCard text="New Life has been life changing for me! I came in freshman year and saw how the people in our ministry pour out 110% of their love to everyone… a real reflection of Jesus! My house church (SIEM REAP) is so vulnerable and supportive in prayer!" name="-Josh Ni (Siem Reap HC)" />
          <TestimonyCard text="New Life Fellowship's House Church Ministry and bible study classes have had a substantial impact on my spiritual growth in college. Though daunting at first, sharing about my daily and spiritual lives with my house church has given me both honest personal reflection and loving advice." name="-Derek Liang (Laos HC)" />
          <TestimonyCard text="During my time in college, I grew alongside other brothers and sisters in Christ as we experienced both joys and challenges together. I am so grateful that God allowed us to do life together for such a short yet precious period of time, and I am looking forward to seeing how He will continue to work through our ministry!" name="-Susan Do (North Africa HC)" />
        </div>
      </div>
    </>
  );
}
