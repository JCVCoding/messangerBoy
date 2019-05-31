import React from "react";
import "./styles/landing.css";

const Footer = () => {
  return (
    <footer className="page-footer" name="contact">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Contact Us</h5>
            <p className="white-text">
              123 Main Street <br /> Atlanta, GA <br />
              404-123-4567
            </p>
          </div>
          <div className="col l4 offset-12 s12 right">
            <h5>Links</h5>
            <ul>
              <li>
                <a
                  className="white-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jcvcoding.github.io/"
                >
                  <i className="fas fa-briefcase" /> Portfolio
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/JCVCoding"
                >
                  <i className="fab fa-github-alt" /> GitHub
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/joshua-vladia-a66b06171"
                >
                  <i className="fab fa-linkedin" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright left-align">
        <div className="container">MessengerBoy Inc {"\u00A9"} 2019</div>
      </div>
    </footer>
  );
};

export default Footer;