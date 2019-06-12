import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./styles/header.css";
import M from "materialize-css";

import ModalButton from "./ModalButton";
import ModalContent from "./ModalContent";

class Header extends Component {
  componentDidMount() {
    this.renderSideNav();
  }

  renderSideNav() {
    document.addEventListener("DOMContentLoaded", function() {
      let elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });
  }

  renderLandingHeader() {
    return (
      <div>
        <nav className="grey darken-3">
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              MessengerBoy
            </Link>
            <a href="#!" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="hide-on-med-and-down nav-links right">
              <li>
                <Link className="sidenav-close" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <LinkScroll to="about" smooth={true}>
                  About
                </LinkScroll>
              </li>

              <li>
                <LinkScroll to="contact" smooth={true}>
                  Contact
                </LinkScroll>
              </li>

              <ModalButton />
            </ul>
          </div>
        </nav>

        <ModalContent />

        <div>
          <ul className="sidenav" id="slide-out">
            <li>
              <Link className="sidenav-close" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <LinkScroll className="sidenav-close" to="about" smooth={true}>
                About
              </LinkScroll>
            </li>
            <li>
              <LinkScroll className="sidenav-close" to="contact" smooth={true}>
                Contact
              </LinkScroll>
            </li>
            <ModalButton />
          </ul>
        </div>
      </div>
    );
  }

  renderSurveyHeader() {
    return (
      <div>
        <nav className="grey darken-3">
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              MessengerBoy
            </Link>
            <a href="#!" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down nav-links">
              <li>
                <Link className="sidenav-close" to={"/"}>
                  Home
                </Link>
              </li>
              <ModalButton />
            </ul>
          </div>
        </nav>

        <ModalContent />

        <div>
          <ul className="sidenav" id="slide-out">
            <li>
              <Link className="sidenav-close" to={"/"}>
                Home
              </Link>
            </li>
            <ModalButton />
          </ul>
        </div>
      </div>
    );
  }

  render() {
    if (
      this.props.location.pathname === "/surveys" ||
      this.props.location.pathname === "/surveys/new"
    ) {
      return <div>{this.renderSurveyHeader()}</div>;
    } else {
      return <div>{this.renderLandingHeader()}</div>;
    }
  }
}

const mapStateToProps = props => {
  return props;
};

export default connect(mapStateToProps)(Header);
