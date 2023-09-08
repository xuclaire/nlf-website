import React from 'react';
import './overview.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import HousechurchCard from '../../shared-components/housechurchCard';
import TestimonyCard from '../../shared-components/testimonyCard';

import Anatolia from './images/anatolia_overview.jpg';
import CMU from './images/cmu_overview.jpg';
import Laos from './images/laos_overview.jpeg';
import Manado from './images/manado_overview.jpg';
import Mongolia from './images/mongolia_overview.jpg';
import NorthAfrica from './images/nahc_overview.jpg';
import Lahu from './images/lahu_overview.jpg';
import Phnom from './images/pphc_overview.jpg';
import Siem from './images/srhc_overview.jpg';
import Tunisia from './images/tunisia_overview.jpg';
import AMhat from './images/amhat_overview.jpg';
import NorthEgypt from './images/nehc_overview.jpg';
import Delhi from './images/delhi_overview.jpg';
import Hyderabad from './images/hyderabad_overview.jpg';
import Kyrgyzstan from './images/kyrgyzstan_overview.jpg';
import Indonesia from './images/indonesia_overview.jpeg';
import JacobLee from './images/jacob_overview.jpg';

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
          <HousechurchCard photo={AMhat} HC="A&M - Harris and Teresa" link="/A&M-hat" />
          {/*<HousechurchCard photo={placeholder} HC="A&M - Ethan" link="/A&M-ethan" />*/}
          <HousechurchCard photo={CMU} HC="Chiang Mai University" link="/cmu" />
          <HousechurchCard photo={Delhi} HC="Delhi" link="/delhi" />
          <HousechurchCard photo={Hyderabad} HC="Hyderabad" link="/hyderabad" />
          <HousechurchCard photo={Indonesia} HC="Indonesia" link="/indonesia" />
          <HousechurchCard photo={JacobLee} HC="Jacob Lee" link="/jacoblee" />
          <HousechurchCard photo={Kyrgyzstan} HC="Kyrgyzstan" link="/kyrgyzstan" />
          <HousechurchCard photo={Lahu} HC="Lahu Thailand" link="/lahu" />
          <HousechurchCard photo={Laos} HC="Laos" link="/laos" />
          <HousechurchCard photo={Manado} HC="Manado" link="/manado" />
          <HousechurchCard photo={Mongolia} HC="Mongolia" link="/mongolia" />
          <HousechurchCard photo={NorthAfrica} HC="North Africa" link="/north_africa" />
          <HousechurchCard photo={NorthEgypt} HC="North Egypt" link="/north_egypt" />
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
