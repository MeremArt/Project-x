import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Project.svg";
import "./Navbar.css";

const Navbar = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="Beans_navbody">
      <div className="Beans_nav-center">
        <div className="Beans_nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={`Beans-contain ${showLinks ? "show-links" : ""}`}
          ref={linksContainerRef}
        >
          <ul className="Beans_links">
            {links.map((link) => (
              <li key={link.id}>
                <a className="holy_bean" href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
