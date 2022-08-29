import React from 'react';
import './home.css';

import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import img from '../../images/home_group.jpg';
import heart from '../../images/home_heart.svg';
import EventContainer from '../../event_container/event_container';
import wavy from '../../images/wavy.svg';
import HomeCard from './home_card';
import housechurch from '../../images/house-church.svg';
import getInvolved from '../../images/get-involved.svg';
import ride from '../../images/ride.svg';

import corporate from './events/corporate.jpg';
import aya from './events/aya.jpg';
import emp from './events/emp.jpg';
import hop from './events/hop.png';
import retreat from './events/retreat.JPG';
import jam from './events/jam.jpg';

function Home() {
  return (
    <>
      <div className="header_container">
        <div className="header_text">
          <div className="header">
            <h1>
              New Life Fellowship <br></br>College Ministry
            </h1>
          </div>
          <p className="header_details">
            Welcome! Join us for fellowship, fun, and Jesus! We are <br></br>a Houston-based college ministry and would love for{' '}
            <br></br>
            you to learn more about us!
          </p>
          <a href="/what_we_do">
            <button>About Us</button>
          </a>
        </div>
        <LeafImageContainerFaceRight photo={img} />
      </div>
      <div className="dark_green_container">
        <div className="row">
          <img src={heart} height={75} />
        </div>
        <div className="row">
          <div className="text-box">
            <h2>
              Our mission is to reach the people of the world for Christ, build them up as fully devoted servant-leaders and send
              them out as messengers of God’s Good News, all for the glory of God.
            </h2>
          </div>
        </div>
      </div>
      <div className="light_green_container">
        <HomeCard
          img={housechurch}
          description="We make disciples and model life with Christ through house church."
          button="Learn about House Church"
          link="/overview"
        />
        <HomeCard
          img={getInvolved}
          description="Get connected to a representative to learn more about the ministry."
          button="Get Connected"
          link="/get_connected"
        />
        <HomeCard
          img={ride}
          description="We'll arrange rides for you to church on Sunday for corporate worship."
          button="Sign-up for a Ride to Church"
          link="/home"
        />
      </div>
      <div className="beige_container">
        <div className="event_header">
          <img src={wavy} height={50} />
          <h3>Events</h3>
        </div>
        <div className="event_grid">
          <EventContainer
            photo={corporate}
            event="Corporate Worship"
            details="Sun | 9-11 am | NLF"
            description="Join the New Life community for Sunday worship through contemporary praise music and a positive, practical message."
          />
          <EventContainer
            photo={emp}
            event="EMP: Early Morning Prayer"
            details="Mon-Sat | 7-8 am | Rice"
            description="Start your day with 45 minutes of individual meditation and prayer, followed by a group-led prayer and Bible reading."
          />
          <EventContainer
            photo={hop}
            event="HOP: House of Prayer"
            details="1st Wed of Month | 7-9 pm | NLF"
            description="HOP is a time of praise, hearing testimonies, listening to devotionals, praying together, and partaking in Christ’s communion.  "
          />
          <EventContainer
            photo={aya}
            event="AYA: As You Are"
            details="2nd Wed of Month | 7:15-10 pm | Rice"
            description="Gather at Rice’s Duncan PDR to praise God and and listen to relevant messages about college student life based on the Scriptures."
          />
          <EventContainer
            photo={jam}
            event="JAM: Jesus And Me"
            details="4th Wed of Month | 7-9 pm | U of H"
            description="JAM is a time for people to come together to praise and worship God in an informal manner. Request your favorite songs, and let’s jam! "
          />
          <EventContainer
            photo={retreat}
            event="College Retreat"
            details="Feb 24-26| Retreat Center"
            description="Get connected with other college students and other New Life  members for a time of fellowship and feeling renewed in Christ!"
          />
        </div>
        <a href="events">
          <button className="button">Check out our events!</button>
        </a>
      </div>
    </>
  );
}

export default Home;
