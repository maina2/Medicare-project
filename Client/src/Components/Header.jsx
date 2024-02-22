// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="MediCare Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/consultation">Consultation</Link>
          </li>
          <li>
            <Link to="/symptomschecker">Symptoms Checker</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
