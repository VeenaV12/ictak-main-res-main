import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Head from "./Head1";
import "./header.css";
import { Button } from "@mui/material";

const Header1 = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/project'>Home</Link>
            </li>
            <li>
              <Link to='/reference'>Reference</Link>
            </li>
            <li>
              <Link to='/wsubmit'>Submission</Link>
            </li>
            <li>
              <Link to='/discussion'>Discussion</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>
              <Button 
                style={{ color: "white" }} 
                onClick={handleLogout} // Attach handleLogout to onClick
              >
                Logout
              </Button>
            </div>
            {/* <span>|</span> */}
            {/* <div className='button'><Link to='/signup'>Signup</Link></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header1;
