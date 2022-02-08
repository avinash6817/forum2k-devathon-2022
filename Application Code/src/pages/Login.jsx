import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Navbar from '../components/Navbar/Navbar';
import "./styles/login-signup.css"

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login__singnup__container flex">
        <div className="login__parent">
           <div className="login__with__fb_google flex">
               <Link to="#"><span className='google__icon'><FcGoogle/></span> Login With Google</Link>
               <Link to="#"><span className='fb__icon'><FaFacebook/></span>  Login With Facebook</Link>
           </div>
           <span className='or__text'>or</span>
           <form className="form__elements flex">
                <input type="email" id="name" placeholder="Email" />
                <input type="password" id="password" placeholder="Password" />
                <div className="remember__me flex">
                   <input type="checkbox" id="remember-me" name="remember-me" />
                   <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className='submit__button'>Login</button>
                <div className="forget__pass flex">
                   <span>Forget Password?</span>
                   <Link to="#">Click here</Link>
                </div>
                <div className="dont__have__account flex">
                   <span>Don't have an account?</span>
                   <Link to="/signup">Sign Up</Link>
                </div>
           </form>
           </div>
      </div>
    </>
  );
};

export default Login;
