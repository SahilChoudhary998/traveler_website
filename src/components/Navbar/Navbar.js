import React from 'react';
import {  Link } from "react-router-dom";
import { useState } from "react";
import  "./navbar.css";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faSuitcase} from "@fortawesome/free-solid-svg-icons";



function Navbar(){
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
  
  <div>
    
     <nav className="navigate">
     <a href="/" className="brand-name">
     TRAV3L3R 
     {/* <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon> */}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
      <div
      className="navigation-menu">
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Search">Search</Link>
    </li>
    <li>
      <Link to="SignIn">Sign In</Link>
    </li>
    <li>
      <Link to="/SignUp">Sign Up</Link>
    </li>
    <li>
      <Link to="Profile">Sign out</Link>
    </li>
    </ul>
    </div>
    </div>
    </nav>
  </div>
  
  
  );
}
export default Navbar;


