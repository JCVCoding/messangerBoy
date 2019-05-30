import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/modal.css";

class ModalContent extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      let elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }

  renderModalContent() {
    return (
      <div>
        <div id="login" className="modal">
          <div className="modal-content center-align">
            <h4 className="black-text">Account Login</h4>
            <p className="black-text flow-text">Connect with</p>
            <div className="section">
              <a
                href="/auth/facebook"
                className="modal-close btn indigo accent-3 social"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div className="section">
              <a href="/auth/google" className="modal-close btn red social">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
            <div className="section">
              <a
                href="/auth/twitter"
                className="modal-close btn social disabled"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderModalContent()}</div>;
  }
}

export default ModalContent;
