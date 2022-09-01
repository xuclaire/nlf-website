/* eslint-disable */
import React from 'react';
import '../styles.css';

import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import img from '../../images/events_pic.png';
import { ReactEmbeddedGoogleCalendar } from './ReactEmbeddedGoogleCalendar';

import EventGrid from '../../event_container/events_grid.jsx';
const url =
  'https://calendar.google.com/calendar/embed?src=nlfhouston.org_2hmenmq53fbb9n6klgs6o5rau0%40group.calendar.google.com&ctz=America%2FChicago';

function Events() {
  return (
    <>
      <div className="header_container">
        <div className="header_text">
          <div className="header">
            <h1>Events</h1>
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
      <div className="calendar_embed" style={{ height: '500px' }}>
        <ReactEmbeddedGoogleCalendar publicUrl={url} />
      </div>
      <EventGrid />
    </>
  );
}

export default Events;
