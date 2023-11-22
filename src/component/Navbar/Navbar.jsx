import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Project.svg";
import Hamburger from "/images/Hamburger1.svg";
import Close from "/images/Close.svg";
import "./Navbar.css";
import Navmodal from "../NavModal/Navmodal";

const Navbar = ({ links, fire }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="Beans_navbody">
      <div className="Beans_nav-center">
        <div className="Beans_nav-header">
          <img src={logo} width={90} height={""} className="logo" alt="logo" />
        </div>
        <div ref={linksContainerRef} onClick={toggleHandler}>
          <img
            className="fix-log"
            src={!toggleMenu ? Hamburger : Close}
            alt="Close tab or hamburger"
          />
          {/* <img src={Close} alt="Close tab or hamburger" /> */}
        </div>
        {toggleMenu && <Navmodal setToggleMenu={setToggleMenu} fire={fire} />}
      </div>
    </nav>
  );
};

export default Navbar;
