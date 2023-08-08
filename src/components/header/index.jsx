import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // Toggle Menu
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  const onClickTabs = (name) => {
    setActiveNav(name);
  };

  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Youjin
        </a>

        {/* <div className={toggle ? "nav__menu show-menu" : "nav__menu"}> */}
        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => onClickTabs("#home")}
                className={`nav__link ${
                  activeNav === "#home" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => onClickTabs("#about")}
                className={`nav__link ${
                  activeNav === "#about" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => onClickTabs("#skills")}
                className={`nav__link ${
                  activeNav === "#skills" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => onClickTabs("#services")}
                className={`nav__link ${
                  activeNav === "#services" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => onClickTabs("#qualification")}
                className={`nav__link ${
                  activeNav === "#qualification" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => onClickTabs("#contact")}
                className={`nav__link ${
                  activeNav === "#contact" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => onClickTabs("#portfolio")}
                className={`nav__link ${
                  activeNav === "#portfolio" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={onClickToggle} />
        </div>
        <div className="nav__toggle" onClick={onClickToggle}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
