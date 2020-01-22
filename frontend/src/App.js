import React, { Component } from "react";
import axios from "axios";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { CONSTANTS } from "./constants";
import NavBar from "./components/NavBar.js";
import Banner from "./components/Banner.js";
import Review from "./components/Review";
import Login from "./components/Login.js";
import Add from "./components/Add";

import "./App.css";
import "./style.css";
import "./index.css";

const FIVE_SECONDS = 5000;

// Rendering and calling the API from React to the Express Server

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      reviews: [],
      showLogin: false,
      showAddReview: false,
      id: 0,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null
    };
  }

  onClickLogin = () => {
    this.setState({ showLogin: true });
  };

  onSubmitLogin = (email, password) => {
    // check if user is actually a user
    // if user is actually a user...
    this.setState({
      user: { email: email },
      showLogin: false
    });
  };

  onSubmitReview = () => {
    this.setState({ showAddReview: false });
  };

  // hideReview = () => {
  //   this.setState({ showAddReview: false });
  // };

  onLogout = () => {};

  render() {
    return (
      <div className="App">
        <NavBar
          currentUser={this.state.user}
          onClickLogin={this.onClickLogin}
        />
        <Banner />
        {this.state.reviews.map(review => (
          <Review currentReview={review} />
        ))}
        <section id="review">
          <Button
            onClick={() => this.setState({ showAddReview: true })}
            className="Button is-danger is-outlined"
          >
            Add Your Review
          </Button>
        </section>
        {this.state.showLogin ? (
          <Login onSubmitLogin={this.onSubmitLogin} />
        ) : null}
        {this.state.showAddReview ? (
          <Add onSubmitReview={this.onSubmitReview} onClick />
        ) : null}
      </div>
    );
  }

  // This function will be called when the render is instantiated but before system is ready for user
  componentDidMount() {
    this.getDataFromApi();
    if (this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromApi, FIVE_SECONDS);
      this.setState({ intervalIsSet: interval });
    }
    var newScript = document.createElement("script");
    newScript.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    document.body.appendChild(newScript);
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromApi = () => {
    fetch(`${CONSTANTS.BACKEND_URL}/reviews`)
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState({ reviews: res });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default App;
