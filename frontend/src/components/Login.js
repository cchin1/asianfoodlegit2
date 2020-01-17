import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import "./../style.css";
import "./../index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { onSubmitLogin } = this.props;
    return (
      <div className="modal is-active" id="login">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="field">
              <label htmlFor="" className="label">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  className="input"
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                  required
                ></input>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Password
              </label>
              <div className="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  className="input"
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                  required
                ></input>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <div className="field">
              <Button
                className="Button"
                onClick={() =>
                  onSubmitLogin(this.state.email, this.state.password)
                }
              >
                Log In
              </Button>
            </div>
            <a href="signup.html"> Don't have an account? Sign up now!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
