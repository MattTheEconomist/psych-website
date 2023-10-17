import React from 'react';
import {Link} from 'react-router-dom'


import styles from './header.module.css'; 

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        {/* <ul className='navLinks'> */}
        <ul className={styles.navLinks}>
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