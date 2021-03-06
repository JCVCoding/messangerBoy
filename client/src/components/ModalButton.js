import React, { Component } from "react";
import { connect } from "react-redux";
import Payments from "./Payments";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/modal.css";
// /auth/google ---> sign in with google
//  /api/logout ---> sign out

class ModalButton extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      let elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="modal-trigger" href="#login" id="login-btn">
              Sign In
            </a>
          </li>
        );
      default:
        return (
          <div>
          
            <li key="3">
              <div className="credits-info" >Credits: {this.props.auth.credits}</div>
            </li>

            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>

            <li key="1">
              <Payments />
            </li>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(ModalButton);
