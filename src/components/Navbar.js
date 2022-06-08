import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}

        

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">courses</NavLink>
            </li>
            <li>
              <NavLink to="/research">research</NavLink>
            </li>
            <li>
              <NavLink to="/members">members</NavLink>
            </li>
            <li>
              <NavLink to="/parmoon">parmoon</NavLink>
            </li>
            <li>
              <NavLink to="/publications">publications</NavLink>
            </li>
            <li>
              <NavLink to="/sparsh">sparsh</NavLink>
            </li>
            <li>
              <NavLink to="/opportunities">opportunities</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
