import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./assests/logo.png";
//import search from "../assets/images/search-icon.png";
 import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
        
      <div className="top-portion"></div>
      <div className=" navbar">
      <div className='leftside'><img src={Logo} alt='Dcyber Logo' className='logo'/></div>
        <div className="nav-container">
          <NavLink
            
            to="/"
             activeClassName="active"
            className="logo-with-text nav-item-1 topbar-container"
            onClick={handleClick}
            
          >
            <table>
              <tr>
                <td style={{ paddingLeft: "50px" }}>
                    {/* <img src={logo} alt="Navbar" />   */}
                </td>
              </tr>
              
            </table>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className=" nav-links"
                onClick={handleClick}
                
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
                
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/partner"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
                
              > 
                PARTNERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/framework"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              
              >
                FRAMEWORK
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
                
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/team"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
               
              >
                TEAM
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active" 
                className=" nav-links"
                onClick={handleClick}
             
              >
                CONTACT US
                
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                BLOG
                
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
