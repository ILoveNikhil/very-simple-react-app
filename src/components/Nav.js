import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/quiz'>Quiz</Link></li>
                <li><Link to='/notes'>Notes</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/events '>Events</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav