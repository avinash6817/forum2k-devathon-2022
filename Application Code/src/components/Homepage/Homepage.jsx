import React from 'react';
import { Link } from 'react-router-dom';
import "./homepage.css"
import heroImage from "../../img/F2k-Hero-image.png"

const Homepage = () => {
  return (
    <>
      <div className="homepage__container flex">
        <div className="homepage__left flex">
          <h1 className="homepage__title">
            Forum2K
          </h1>
          <h4 className="homepage__tagname">
            Tag line of Forum2K we are<br/> ambitious to work with you.
          </h4>
          <button><Link to="/signup">Get Started</Link></button>
        </div>
        <div className="homepage__right flex">
          <div className="homepage__hero__image">
            <img src={heroImage} alt="F2K-hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
