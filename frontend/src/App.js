import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import constants from "./constants";
import "./style.css";
import "./index.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components/lib/components/button";
import "./img/logo.png";

// Rendering and calling the API from React to the Express Server

class App extends Component {
  // Creating a state with a message
  state = { message: "ERROR NO MESSAGE" };

  render() {
    return (
      <div className="App">
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
              <img
                src="./img/logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu ">
            <div class="navbar-start">
              <a class="navbar-item" href="#">
                Sushi
              </a>

              <a class="navbar-item" href="#">
                Dumplings
              </a>

              <a class="navbar-item" href="#">
                Noodles
              </a>

              <a class="navbar-item" href="#">
                Hot Pot
              </a>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <Button id="loginBTN" class="Button is-danger is-outlined">
                  Log In
                </Button>

                <p class="control">
                  <a href="signup.html" class="Button is-danger">
                    <span>Sign Up</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <section id="page_header">
          <div class="page_title">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title upper">Our Legit</h2>
                  <p>The Most Authentic Asian Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Card">
          <div class="Columns">
            <div class="Column is-two-fifths">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <br />
            </div>
          </div>
          <div class="Column">
            <h1 class="title is-3">Name:</h1>
            <div class="rating">
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

            <div class="review">
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
            class="Button is-danger is-outlined"
            onclick="window.location.href = 'login.html';"
          >
            Add Your Review
          </Button>
        </section>
        <div class="modal" id="login">
          <div class="modal-background"></div>
          <div class="modal-Card">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">
                  Email
                </label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    class="input"
                    required
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">
                  Password
                </label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <Button class="Button is-success">Login</Button>
              </div>
              <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </form>
          </div>
        </div>

        <div class="modal" id="signup">
          <div class="modal-background"></div>
          <div class="modal-Card">
            <form action="" class="box" />
            <div class="login Column is-6">
              <section class="section">
                <div class="has-text-centered">
                  <img class="login-logo" src="img/logo.png" />
                </div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-right">
                    <input class="input" type="text" />
                    <span class="icon is-small is-right">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-right">
                    <input class="input" type="text" />
                    <span class="icon is-small is-right">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-right">
                    <input class="input" type="password" />
                    <span class="icon is-small is-right">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                </div>
                <div class="has-text-centered">
                  <a class="Button is-vcentered is-primary">Sign Up!</a>
                </div>
                <br />
                <div class="has-text-centered">
                  <a href="login.html">
                    {" "}
                    Already have an account? Log in now !
                  </a>
                </div>
              </section>
            </div>
            <div id="particles-js" class="interactive-bg Column is-8"></div>
          </div>
        </div>

        <div class="modal" id="login">
          <div class="modal-background"></div>
          <div class="modal-Card">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">
                  Email
                </label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">
                  Password
                </label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <Button class="Button is-success">Login</Button>
              </div>
              <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </form>
          </div>
        </div>

        <section class="modal-Card-body">
          <div class="modal-content">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">
                  Email
                </label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">
                  Password
                </label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <Button class="Button is-success">Login</Button>
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
