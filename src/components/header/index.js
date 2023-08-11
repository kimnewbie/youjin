import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebaseinit";
import { collection, getDocs } from 'firebase/firestore';

const Header = () => {
  // Toggle Menu
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // user
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [isLogin, setIsLogin] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  const onClickTabs = (name) => {
    setActiveNav(name);
  };

  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header?.classList?.add("scroll-header");
    else header?.classList?.remove("scroll-header");
  });

  useEffect(() => {
    const getUsers = async () => {
      const { docs } = await getDocs(usersCollectionRef);
      setUsers(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Youjin
        </a>

        {/* <div className={toggle ? "nav__menu show-menu" : "nav__menu"}> */}
        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="/#home"
                onClick={() => onClickTabs("/#home")}
                className={`nav__link ${activeNav === "/#home" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-estate nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#about"
                onClick={() => onClickTabs("/#about")}
                className={`nav__link ${activeNav === "/#about" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-smile-wink-alt nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#skills"
                onClick={() => onClickTabs("/#skills")}
                className={`nav__link ${activeNav === "/#skills" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-file-alt nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#services"
                onClick={() => onClickTabs("/#services")}
                className={`nav__link ${activeNav === "/#services" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-briefcase-alt nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#qualification"
                onClick={() => onClickTabs("/#qualification")}
                className={`nav__link ${activeNav === "/#qualification" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-briefcase-alt nav__icon" />
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#portfolio"
                onClick={() => onClickTabs("/#portfolio")}
                className={`nav__link ${activeNav === "/#portfolio" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-scenery nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/#contact"
                onClick={() => onClickTabs("/#contact")}
                className={`nav__link ${activeNav === "/#contact" ? "active-link" : ""
                  }`}
              >
                <i className="uil uil-message nav__icon" />
                Contact
              </a>
            </li>
            {
              !isLogin ?
                <>
                  <li className="nav__item">
                    <Link to="/signup"
                      onClick={() => onClickTabs("/signup")}
                      className={`nav__link ${activeNav === "/signup" ? "active-link" : ""}`}><i className="uil uil-file-edit-alt nav__icon" />Sign Up</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/signin"
                      onClick={() => onClickTabs("/signin")}
                      className={`nav__link ${activeNav === "/signin" ? "active-link" : ""}`}><i className="uil uil-sign-out-alt nav__icon" />Sign In</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav__item">
                    <Link to="/myInfo"
                      onClick={() => onClickTabs("/myInfo")}
                      className={`nav__link ${activeNav === "/myInfo" ? "active-link" : ""}`}>
                      <i className="uil uil-user nav__icon" />User</Link>
                  </li>
                </>
            }
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
