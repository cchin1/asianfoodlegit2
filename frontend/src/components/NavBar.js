import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import "../style.css";
import "../index.css";
import logoImage from "../img/logo.png";

class NavBar extends Component {
  render() {
    let currentUser = this.props.currentUser;

    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="index.html">
            <img
              src={logoImage}
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu ">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Sushi
            </a>

            <a className="navbar-item" href="#">
              Dumplings
            </a>

            <a className="navbar-item" href="#">
              Noodles
            </a>

            <a className="navbar-item" href="#">
              Hot Pot
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {currentUser ? (
              <div>{currentUser.name}</div>
            ) : (
              <div className="field is-grouped">
                <Button id="loginBTN" className="Button is-danger is-outlined">
                  Log In
                </Button>

                <p className="control">
                  <a href="signup.html" className="Button is-danger">
                    <span>Sign Up</span>
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
