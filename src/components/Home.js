import React from 'react';
import bg from './assests/bgvid.gif';

import { Link } from "react-router-dom";
import '../styles/Home.css';
function Home() {
    return (
      <div id='home' className="home" style={{ backgroundImage: `url(${bg})` }}>
        <div className="headerContainer">
          <h1> Dcyber Techlab </h1>
          <p> INFINITE POSSIBILITIES</p>
          <Link to="/service">
            <button> Let's start </button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Home;
