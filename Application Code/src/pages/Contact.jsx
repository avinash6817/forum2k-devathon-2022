import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "./styles/contact.css"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact__container">
          <div className="contact__title flex">
              <h1>Contact</h1>
          </div>
          <div className="form__container">
              <form className='form__elements flex' id='form__elements'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your fullname" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                <textarea name="message" id="message" cols="30" rows="6" placeholder="Write your message"></textarea>
                <input id='contact__submit__button' type="submit" value="Send"/>
              </form>
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
