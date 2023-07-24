import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <p className='footer-title'>Links</p>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/demo-technologies">Demo Technologies</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="footer-subdomains">
        <p className='footer-title'>Other sites</p>
        <a href="https://chat.louiml.net">chat.louiml.net</a>
        <a href="https://search.louiml.net">search.louiml.net</a>
        <a href="https://music.louiml.net">music.louiml.net</a>
        <a href="https://status.louiml.net">status.louiml.net</a>
      </div>
      <div className="footer-email">
        <p className='footer-title'>Contact Us</p>
        <a href="mailto:support@louiml.net">support@louiml.net</a>
      </div>
    </footer>
  );
};

export default Footer;
