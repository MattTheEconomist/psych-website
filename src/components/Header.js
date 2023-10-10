import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <ul>
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
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;