import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {

  const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
  return (
    <>
    <header>
        <Link className="logo" to="/"><img src="images/blue_space_logo2.jpg" alt="logo"/></Link>
        <nav>
            <ul className="nav__links">
            <li> <Link to="/" className='activ'>Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/quiz">Quiz</Link> </li>
                <li> <Link to="/notes">Notes</Link> </li>
                <li> <Link to="/courses">Courses</Link> </li>
                <li> <Link to="/services">Services</Link> </li>
                <li> <Link to="/events">Events</Link> </li>
                {/* <li> <Link to="/contactus" className='cta'>Contact Us</Link> </li> */}
            </ul>
        </nav>
        <Link to="/contactus" className='cta'>Contact Us</Link>
        <p class="menu cta" onClick={open}>Menu</p>
    </header>
    <div className="overlay">
        <Link className="close" onClick={close}>&times;</Link>
        <ul class="overlay__content">
        <li> <Link to="/" className='activ'>Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/quiz">Quiz</Link> </li>
                <li> <Link to="/notes">Notes</Link> </li>
                <li> <Link to="/courses">Courses</Link> </li>
                <li> <Link to="/services">Services</Link> </li>
                <li> <Link to="/events">Events</Link> </li>
                <li> <Link to="/contactus">Contact Us</Link> </li>
            
        </ul>
    </div>
    {/* <!-- adding js for toggle --> */}
    {/* <script type="text/javascript" src="mobile.js"></script> */}
    </>
  )
}



const open = () => {

}
const close = () =>{

}



export default Nav