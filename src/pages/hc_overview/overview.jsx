import React from 'react';
import '../styles.css';
import ImageContainer from '../../shared-components/imageContainer';
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

export default function Overview() {
  return (
    <>
      <div className="header_container">
        <div className="header_text">
          <div className="header">
            <h1>What is House Church?</h1>
          </div>
          <p className="header_details">
            Welcome! Join us for fellowship, fun, and Jesus! We are <br></br>a Houston-based college ministry and would love for{' '}
            <br></br>
            you to learn more about us!
          </p>
        </div>
      </div>
      <div className="over_dark_green_container">
        <h2>House Churches</h2>
        <div className="housechurch_grid">
          <ImageContainer photo={Anatolia} title="Anatolia" description="" />
          <ImageContainer photo={CentralJapan} title="Central Japan" description="" />
          <ImageContainer photo={CMU} title="Chiang Mai University" description="" />
          <ImageContainer photo={Laos} title="Laos" description="" />
          <ImageContainer photo={Manado} title="Manado" description="" />
          <ImageContainer photo={Mongolia} title="Mongolia" description="" />
          <ImageContainer photo={SA} title="South Africa" description="" />
          <ImageContainer photo={NA} title="North Africa" description="" />
          <ImageContainer photo={Phnom} title="Phnom Penh" description="" />
          <ImageContainer photo={Siem} title="Siem Reap" description="" />
          <ImageContainer photo={Tunisia} title="Tunisia" description="" />
        </div>
      </div>
      <div className="beige_container">
        <h4>Testimonies</h4>
        <div className="testimony_grid">
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
        </div>
      </div>
    </>
  );
}
