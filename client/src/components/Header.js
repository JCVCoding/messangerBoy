import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Payments from "./Payments";
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

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <a href="/auth/google">Sign In</a>
          </div>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div>
        <nav>
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

        <div className="hide-on-large-only">
          <ul className="sidenav" id="slide-out">
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
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
