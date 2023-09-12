import React from 'react';
import EventContainer from './event_container';

import './events_grid.css';

import corporate from './events/corporate.jpg';
import aya from './events/aya.jpg';
import emp from './events/emp.jpg';
import hop from './events/hop.png';
import retreat from './events/retreat.JPG';
import jam from './events/jam.jpg';
import wavy from '../images/wavy.svg';

export default function EventsGrid() {
  return (
    <div className="events_grid">
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
          details="Mon-Fri | 7-8 am | Rice"
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
          details="2nd Wed of Odd Months | 7:15-10 pm | Rice"
          description="Gather at Rice’s Duncan PDR to praise God and and listen to relevant messages about college student life based on the Scriptures."
        />
        <EventContainer
          photo={jam}
          event="JAM: Jesus And Me"
          details="2nd Wed of Even Months | 7-9 pm | Rice"
          description="JAM is a time for people to come together to praise and worship God in an informal manner. Request your favorite songs, and let’s jam! "
        />
        <EventContainer
          photo={retreat}
          event="Fall Retreat"
          details="Nov 10 - Nov 12 | Camp Allen"
          description="Get connected with other college students and other New Life  members for a time of fellowship and feeling renewed in Christ!"
        />
      </div>
    </div>
  );
}
