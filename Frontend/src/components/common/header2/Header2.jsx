import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./header.css";
import { Button } from "@mui/material";
import Head2 from "./Head2";

const Header2 = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <Head2 />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            {/*<li>
              <Link to='/'>About</Link>
            </li>*/}
          </ul>
          <div className='start'>
            <div className='button'>
              <Button 
                style={{color: "white"}} 
                onClick={handleLogout} // Attach handleLogout to onClick
              >
                Logout
              </Button>
            </div>
            {/* <span>|</span>
            <div className='button'>
              <Link to='/student'>
                <Button style={{color: "white"}}>Signup</Button>
              </Link>
            </div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header2;
