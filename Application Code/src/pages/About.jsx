import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "./styles/about.css"
import team1 from "../img/founder.png"
import team2 from "../img/ceo.png"

const About = () => {
  return (
      <>
      <Navbar/>
      <div className="about__container grid">
          <div className="about__intro flex">
              <div className="about__title flex">
                  <h1>Who We Are</h1>
              </div>
            <div className="about__description flex">
                <div className="about__brand__logo">
                  <img src="images/F2k-Logo.svg" alt="" />
                </div>
                <div className="about__text flex">
                    <h6 className="about__tagline">
                      Tagline of Forum2k 
                    </h6>
                    <p className="about__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus pariatur fugit adipisci modi et repellat mollitia facere, molestiae, ullam necessitatibus nisi voluptatum minima, nostrum provident recusandae. Ut commodi pariatur laudantium.
                    </p>
                </div>
            </div>
          </div>

          <div className="about__our__team">
             <div className="our__team__title flex">
               <h1>Our Team</h1>
             </div>

             <div className="our__team__details grid">
               
                <div className="our__team__card flex">
                    <div className="card__image">
                        <img src={team1} alt="" />
                    </div>
                    <div className="card__name">
                         peter parker
                    </div>
                    <div className="card__designation">
                        Founder, Forum2K
                    </div>
                    <div className="card__links flex">
                        <span><Link to={"dummy.com"}><FaFacebook/></Link></span>
                        <span><Link to={"dummy.com"}><FaLinkedin/></Link></span>
                        <span><Link to={"dummy.com"}><FaTwitter/></Link></span>
                    </div>
                </div>

                <div className="our__team__card flex">
                    <div className="card__image">
                        <img src={team2} alt="" />
                    </div>
                    <div className="card__name">
                         Simon parker
                    </div>
                    <div className="card__designation">
                        CEO, Forum2K
                    </div>
                    <div className="card__links flex">
                        <span><Link to={"dummy.com"}><FaFacebook/></Link></span>
                        <span><Link to={"dummy.com"}><FaLinkedin/></Link></span>
                        <span><Link to={"dummy.com"}><FaTwitter/></Link></span>
                    </div>
                </div>
            
             </div>

            

          </div>

      </div>
      <Footer/>
      </>
  );
};

export default About;
