import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Navbar from '../components/Navbar/Navbar';
import "./styles/login-signup.css"


const Signup = () => {
  return (
    <>
      <Navbar/>
      <div className="login__singnup__container flex">
        <div className="login__parent">
           <div className="login__with__fb_google flex">
               <Link to="#"><span className='google__icon'><FcGoogle/></span> Login With Google</Link>
               <Link to="#"><span className='fb__icon'><FaFacebook/></span>  Login With Facebook</Link>
           </div>
           <span className='or__text'>or</span>
           <form className="form__elements flex">
                <input type="text" id="name" placeholder="Name" />
                <input type="email" id="email" placeholder="Email" />
                <input type="password" id="password" placeholder="Password" />
                <input type="password" id="confirm-password" placeholder="Confirm Password" />
                <button type="submit" className='submit__button'>Sign in</button>
                <div className="already__have__account flex">
                   <span>Already have an account?</span>
                   <Link to="/login">Login</Link>
                </div>
           </form>
           </div>
      </div>
    </>
  );
};

export default Signup;
