/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <span className='logo'>Math Magicians</span>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/quotes'>Quotes</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
