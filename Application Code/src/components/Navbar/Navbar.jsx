import React, { useState,useRef,useEffect } from 'react';
import {Link, NavLink } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg"
import "./navbar.css"

const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const closeMenuOutside = e => {
       if(showMenu && ref.current && !ref.current.contains(e.target)){
         setshowMenu(false);
       }
    };
    document.addEventListener("mousedown", closeMenuOutside);
  
    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
    };
  }, [showMenu]);
  

  return (
    <nav className="navbar__container flex">
        <div className="navbar__left flex">
          <div className="navbar__logo">
            <Link to="/"><img src="images/F2k-Logo.svg" alt="Forum-2k Logo" /></Link>
          </div>
          <div className="navbar__links">
            <ul className="navbar__links__items flex">
              <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar__right flex">
          <NavLink className="login" to="/login">Login </NavLink>
          <button className='btn'><Link to="/signup">Sign Up</Link></button>
        </div>
        <div className='mobile__menu__container' ref={ref}>
            <span className='grid__menu__icon' onClick={() => setshowMenu(!showMenu)} ><CgMenuGridO /></span>
            <div className={`mobile__menu__links__container ${showMenu ? "show" : ""}`}>
                <ul className="mobile__menu__links">
                    <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;

