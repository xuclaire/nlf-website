import React from "react";
import './footer.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';
import fbIcon from "./icons/facebook.svg";
import instaIcon from "./icons/instagram.svg";
import remindIcon from "./icons/remind.svg";
import youtubeIcon from "./icons/youtube.svg";
import button from "./icons/footer_button.svg";

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-row">
          <div className="column1">
            <img src={logo} height={55} alt="Logo" />
          </div>
          <div className="column">
            <p className="footer-text">7777 Fairbanks North Houston Rd</p>
            <p className="footer-text">Houston, TX 77040</p>
            <p className="footer-text">Phone: 713.896.7755</p>
          </div>
          <div className="footer-column">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/what_we_do" className="footer-link">
              What We Do
            </Link>
            <Link to="/overview" className="footer-link">
              House Church
            </Link>
          </div>
          <div className="footer-column">
            <Link to="/events" className="footer-link">
              Events
            </Link>
            <Link to="/classes" className="footer-link">
              Classes
            </Link>
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
          </div>
          <div className="footer-column">
            <Link to="/get_connected" className="footer-link">
              <img src={button} />
            </Link>
            <div className="icon-group">
              <a
                href="https://www.facebook.com/groups/2725833467432826"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fbIcon} height={30} alt="Logo" />
              </a>
              <a
                href="https://www.instagram.com/nlfcollegeministry/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instaIcon} height={30} alt="Logo" />
              </a>
              <a
                href="https://www.remind.com/join/nlfco"
                target="_blank"
                rel="noreferrer"
              >
                <img src={remindIcon} height={24} alt="Logo" />
              </a>
              <a
                href="https://www.youtube.com/c/nlfhtx"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} height={30} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
