import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Youjin</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          {/* <a
            href="https://instagram.com/kimyoujin"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon
              name="instagram-alt"
              type="logo"
              color="#fff"
              size="1.125rem"
            />
          </a> */}
          <a
            href="https://github.com/kimnewbie"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon name="github" type="logo" color="#fff" size="1.125rem" />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Youjin. All rigths reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
