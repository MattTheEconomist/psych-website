import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
// import './header.module.css'

function Header() {
  return (
    <div className='header'>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/therapy-types">Therapy Types</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Header;