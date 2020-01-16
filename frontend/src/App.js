import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import logo from "./logo.svg";
import "./App.css";
import constants from "./constants";
import "./style.css";
import "./index.css";
import { Button } from "react-bulma-components";
import logoImage from "./img/logo.png";

// Rendering and calling the API from React to the Express Server

class App extends Component {
  // Creating a state with a message
  state = { message: "ERROR NO MESSAGE" };

  render() {
    return (
      <div className="App">
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
            </div>
          </div>
        </nav>

        <section id="page_header">
          <div className="page_title">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="title upper">Our Legit</h2>
                  <p>The Most Authentic Asian Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Card">
          <div className="Columns">
            <div className="Column is-two-fifths">
              <figure className="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <br />
            </div>
          </div>
          <div className="Column">
            <h1 className="title is-3">Name:</h1>
            <div className="rating">
              <input name="stars" id="e5" type="radio" />
              <label for="e5">☆</label>
              <input name="stars" id="e4" type="radio" />
              <label for="e4">☆</label>
              <input name="stars" id="e3" type="radio" />
              <label for="e3">☆</label>
              <input name="stars" id="e2" type="radio" />
              <label for="e2">☆</label>
              <input name="stars" id="e1" type="radio" />
              <label for="e1">☆</label>
            </div>

            <div className="review">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>
            </div>
          </div>
        </section>

        <section id="review">
          <Button
            className="Button is-danger is-outlined"
            onclick="window.location.href = 'login.html';"
          >
            Add Your Review
          </Button>
        </section>
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

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Asian Food Legit!
            <span role="img" aria-label="chinese-takeout">
              🥡
            </span>
            <span role="img" aria-label="chinese-takeout">
              🥡
            </span>
            <span role="img" aria-label="chinese-takeout">
              🥡
            </span>
          </p>
          <p>The message is: {this.state.message}</p>
          <p>The route is: {`${constants.hostname}/status`}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
