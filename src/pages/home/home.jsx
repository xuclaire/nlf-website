import React from 'react';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import img from '../../images/home_group.jpg';
import '../styles.css';
import heart from '../../images/home_heart.svg';
import EventContainer from '../../event_container/event_container';
import event1 from '../../images/event1.jpg';
import wavy from '../../images/wavy.svg';
import HomeCard from './home_card';
import housechurch from '../../images/house-church.svg';
import getInvolved from '../../images/get-involved.svg';
import ride from '../../images/ride.svg';

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
          <p>
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
      <div className="dark_green_container">
        <div className="row">
          <img src={heart} height={75} />
        </div>
        <div className="row">
          <h2>
            We make disciples and model life with <br></br>
            Christ through housechurch.
          </h2>
        </div>
      </div>
      <div className="beige_container">
        <div className="event_header">
          <img src={wavy} height={50} />
          <h3>Events</h3>
        </div>
        <div className="event_grid">
          <EventContainer photo={event1} event="Corporate Worship" details="Sun | 9-11 am | NLF" description="Lorem ipsum" />
          <EventContainer
            photo={event1}
            event="EMP: Early Morning Prayer"
            details="Mon-Sat | 7-8 am | Rice"
            description="Lorem ipsum"
          />
          <EventContainer
            photo={event1}
            event="HOP: House of Prayer"
            details="1st Wed of Month | 7-9 pm | NLF"
            description="Lorem ipsum"
          />
          <EventContainer
            photo={event1}
            event="AYA: As You Are"
            details="2nd Wed of Month | 7:15-10 pm | Rice"
            description="Lorem ipsum"
          />
          <EventContainer
            photo={event1}
            event="JAM: Jesus And Me"
            details="4th Wed of Month | 7-9 pm | U of H"
            description="Lorem ipsum"
          />
          <EventContainer photo={event1} event="College Retreat" details="Feb 24-26| Retreat Center" description="Lorem ipsum" />
        </div>
        <a href="events">
          <button className="button">Check out our events!</button>
        </a>
      </div>
    </>
  );
}

export default Home;
