import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">Savvy Surfer</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
