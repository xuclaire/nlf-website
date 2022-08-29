 /* eslint-disable */
import React from 'react';
import '../styles.css';

import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import img from '../../images/events_pic.png';
import EventContainer from '../../event_container/event_container';
import event1 from '../../images/event1.jpg';
import wavy from '../../images/wavy.svg';
import { ReactEmbeddedGoogleCalendar } from './ReactEmbeddedGoogleCalendar';

const url = "https://calendar.google.com/calendar/embed?src=nlfhouston.org_2hmenmq53fbb9n6klgs6o5rau0%40group.calendar.google.com&ctz=America%2FChicago";

function Events() {
  return (
    <>
      <div className="header_container">
        <div className="header_text">
          <div className="header">
            <h1>
              Events
            </h1>
          </div>
          <p className="header_details">
            Text ____ to 81010 or click the button below to be<br></br>notified of upcoming events.
          </p>
          <a href="/what_we_do">
            <button>Keep me updated!</button>
          </a>
        </div>
        <LeafImageContainerFaceRight photo={img} />
      </div>
      <div className="calendar_embed" style={{height: '500px'}}>
        <ReactEmbeddedGoogleCalendar publicUrl={url}/>
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

export default Events;
