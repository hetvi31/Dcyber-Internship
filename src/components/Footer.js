import React from 'react';
import '../styles/Footer.css';
import phoneIcon  from './assests/phoneIcon.png';
import locationIcon from './assests/locationIcon.png';
import mailIcon from './assests/mailIcon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <img src={phoneIcon} alt="Phone" className="black-logo" />
          <p className="subtitle">+91 9820293767 (India)</p>
        </div>
        <div className="footer-item">
          <img src={locationIcon} alt="Location" className="black-logo"/>
          <p className="subtitle">D-6, Laxmi Vishnu Chs, Plot no.617 Sector-6, Domino pizza street,charkop, Kandivali West, Mumbai-400067, Maharashtra , INDIA</p>
        </div>
        <div className="footer-item">
          <img src={mailIcon} alt="Mail" className="black-logo"/>
          <p className="subtitle">contactus@dcyber.in</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
