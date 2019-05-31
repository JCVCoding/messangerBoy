import React, { Component } from "react";
import "./styles/landing.css";
import { Link } from "react-scroll";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="background-top">
          <div className="overlay">
            <div className="container">
              <div className="row white-text">
                <div className="col s12 hero center-align">
                  <h1>Bring your message to the world</h1>
                  <p className="flow-text">
                    MessengerBoy makes sending emails and gathering survey data
                    easy.
                  </p>
                  <Link
                    className="waves-effect waves-light btn-large hero-btn"
                    to="about"
                    smooth={true}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section white" name="about">
          <div className="row container">
            <div className="col s12 m4">
              <div className="card card-landing center-align">
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
              <div className="card card-landing center-align">
                <div className="card-content white-text">
                  <i className="material-icons medium">
                    sentiment_very_satisfied
                  </i>
                  <span className="card-title">Easy Setup</span>
                  <p>
                    Our application is easy to get started with. Create an
                    account and send your first 100 emails for free!
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card card-landing center-align">
                <div className="card-content white-text">
                  <i className="material-icons medium">build</i>
                  <span className="card-title">24/7 Support</span>
                  <p>
                    Our team of trained technicians are always on standby to
                    help sort out any questions or issues you may have
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section red lighten-2 white-text center-align">
          <h4>Empowering businesses with on demand survey data</h4>
        </div>

        <div className="section white black-text center-align flow-text">
          <p>
            Thousands of companies use MessengerBoy to send over 30 million
            emails every month
          </p>
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
        <Footer />
      </div>
    );
  }
}

export default Landing;
