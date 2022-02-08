import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__upper grid">
        <div className="footer__logo">
          <Link to="/"><img src="images/F2k-Logo.svg" alt="Forum-2k Logo" /></Link>
        </div>
        <div className="footer__links">
          <ul className="footer__links__items flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        <div className="footer__socialmedia__links flex">
          <Link to="#"><FaFacebook /></Link>
          <Link to="#"><FaInstagram /></Link>
          <Link to="#"><FaTwitter /></Link>
        </div>
        <div className="footer__email flex">
          <MdOutlineMailOutline /><span>forum2k2022@gmail.com</span>
        </div>
      </div>
      <div className="footer__lower flex">
        <p className="footer__copyright">
        Copyright © 2022 Forum2k
        </p>
        <p className="footer__credit">
         <BsCodeSlash/>  Developed by Avinash
        </p>
      </div>
    </footer>
  );
};

export default Footer;
