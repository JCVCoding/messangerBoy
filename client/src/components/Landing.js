import React from "react";
import "./styles/landing.css";

const Landing = () => {
  return (
    <div>
      <div className="background-top">
        <div className="overlay">
          <div className="container">
            <div className="row white-text">
              <div className="col s12">
                <h1>Bring your message to the world</h1>
                <p>
                  MessengerBoy makes sending emails and gathering survey data
                  easy.
                </p>
                <a className="waves-effect waves-light btn" href="#about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section white" id="about">
        <div className="row container">
          <div className="col s12 m4">
            <div className="card blue center-align">
              <div className="card-content white-text">
                <i className="material-icons medium">send</i>
                <span className="card-title">Reliable Service</span>
                <p>
                  We utilize the SendGrid API, a trusted service by developers
                  and marketers, to send mass amounts of email.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card blue center-align">
              <div className="card-content white-text">
                <i className="material-icons medium">
                  sentiment_very_satisfied
                </i>
                <span className="card-title">Easy Setup</span>
                <p>
                  Our application is easy to get started with. Create an account
                  and send your first 100 emails for free!
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card blue center-align">
              <div className="card-content white-text">
                <i className="material-icons medium">build</i>
                <span className="card-title">24/7 Support</span>
                <p>
                  Our team of trained technicians are always on standby to help
                  sort out any questions or issues you may have
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section red lighten-2 white-text center-align">
        <h3>Empowering businesses with on demand survey data</h3>
      </div>

      <div className="section white black-text center-align">
        <h5>
          Thousands of companies use MessengerBoy to send over 30 million emails
          every month
        </h5>
        <p className="customers">Some of our customers include...</p>
        <div className="container">
          <div className="row">
            <div className="row valign-wrapper">
              <div className="col s3 l2">
                <img
                  className="responsive-img"
                  src={require("../images/logos/adidas.png")}
                  alt="adidas logo"
                />
              </div>
              <div className="col s3 l2">
                <img
                  className="responsive-img"
                  src={require("../images/logos/coke.png")}
                  alt="coke logo"
                />
              </div>
              <div className="col s3 l2">
                <img
                  className="responsive-img"
                  src={require("../images/logos/honda.png")}
                  alt="honda logo"
                />
              </div>
              <div className="col s3 l2">
                <img
                  className="responsive-img"
                  src={require("../images/logos/pirelli.png")}
                  alt="pirelli logo"
                />
              </div>
              <div className="col l2 hide-on-med-and-down">
                <img
                  className="responsive-img"
                  src={require("../images/logos/redbull.png")}
                  alt="redbull logo"
                />
              </div>
              <div className="col l2 hide-on-med-and-down">
                <img
                  className="responsive-img"
                  src={require("../images/logos/sony.png")}
                  alt="sony logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contact Us</h5>
              <p className="white-text">123 Main Street <br /> Atlanta, GA <br />404-123-4567</p>
            </div>
            <div className="col l4 offset-12 s12 right">
              <h5>Links</h5>
              <ul>
                <li><a className="white-text" target="_blank" rel="noopener noreferrer" href="https://jcvcoding.github.io/"><i class="fas fa-briefcase"></i> Portfolio</a></li>
                <li><a className="white-text" target="_blank" rel="noopener noreferrer" href="https://github.com/JCVCoding"><i class="fab fa-github-alt"></i> GitHub</a></li>
                <li><a className="white-text" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/joshua-vladia-a66b06171"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright left-align">
          <div className="container">
            MessengerBoy Inc {'\u00A9'} 2019
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
