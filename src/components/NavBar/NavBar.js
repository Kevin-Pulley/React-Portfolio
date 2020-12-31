
import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="home"
            className="navbar-logo"
            onClick={closeMobileMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Kevin Pulley
            <i class="far fa-keyboard"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-bars": "fas fa-times"  } />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                onClick={closeMobileMenu}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cards"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;