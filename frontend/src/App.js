import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import constants from "./constants";
import NavBar from "./components/NavBar.js";
import Banner from "./components/Banner.js";
import Review from "./components/Review";

import "./App.css";
import "./style.css";
import "./index.css";

// Rendering and calling the API from React to the Express Server

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Test User",
        email: "test@demo.com"
      },
      review: {
        name: "test restaurant",
        rating: 5,
        pic: "https://bulma.io/images/placeholders/256x256.png",
        blurb:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditatev non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
      }
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.user} />
        <Banner />
        <Review currentReview={this.state.review} />
        <Button
          className="Button is-danger is-outlined"
          onclick="window.location.href = 'login.html';"
        >
          Add Your Review
        </Button>

        <div className="modal" id="login">
          <div className="modal-background"></div>
          <div className="modal-Card">
            <form action="" className="box">
              <div className="field">
                <label for="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <Button className="Button is-success">Login</Button>
              </div>
              <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </form>
          </div>
        </div>

        <div className="modal" id="signup">
          <div className="modal-background"></div>
          <div className="modal-Card">
            <form action="" className="box" />
            <div className="login Column is-6">
              <section className="section">
                <div className="has-text-centered">
                  <img className="login-logo" src="img/logo.png" />
                </div>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-right">
                    <input className="input" type="text" />
                    <span className="icon is-small is-right">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-right">
                    <input className="input" type="text" />
                    <span className="icon is-small is-right">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-right">
                    <input className="input" type="password" />
                    <span className="icon is-small is-right">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>
                </div>
                <div className="has-text-centered">
                  <a className="Button is-vcentered is-primary">Sign Up!</a>
                </div>
                <br />
                <div className="has-text-centered">
                  <a href="login.html">
                    {" "}
                    Already have an account? Log in now !
                  </a>
                </div>
              </section>
            </div>
            <div id="particles-js" className="interactive-bg Column is-8"></div>
          </div>
        </div>

        <div className="modal" id="login">
          <div className="modal-background"></div>
          <div className="modal-Card">
            <form action="" className="box">
              <div className="field">
                <label for="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <Button className="Button is-success">Login</Button>
              </div>
              <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </form>
          </div>
        </div>

        <section className="modal-Card-body">
          <div className="modal-content">
            <form action="" className="box">
              <div className="field">
                <label for="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label for="" className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <Button className="Button is-success">Login</Button>
              </div>
              <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </form>
          </div>
        </section>
      </div>
    );
  }

  //This function will be called when the render is instantiated but before system is ready for user
  //Configuring CORS

  componentDidMount() {
    fetch(`${constants.hostname}/status`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("before the parse");
        const jsonParsed = res.json();
        console.log("after the parse");
        return jsonParsed;
      })
      .then(data => {
        console.log(data);
        this.setState({ message: data.message });
      })
      .catch(console.error);
  }
}

export default App;
