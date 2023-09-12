import React from 'react';
import './home.css';

import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import img from '../../images/home_group.jpg';
import heart from '../../images/home_heart.svg';
import HomeCard from './home_card';
import housechurch from '../../images/house-church.svg';
import getInvolved from '../../images/get-involved.svg';
import ride from '../../images/ride.svg';

import EventGrid from '../../event_container/events_grid.jsx';


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
          link="https://forms.gle/afLhCvm8wNhjBLpA8"
        />
      </div>
      <div className="beige_container">
        <EventGrid />
        <a href="events">
          <button className="button">Check out our events!</button>
        </a>
      </div>
    </>
  );
}

export default Home;
