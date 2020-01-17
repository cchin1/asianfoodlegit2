import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import constants from "./constants";
import NavBar from "./components/NavBar.js";
import Banner from "./components/Banner.js";
import Review from "./components/Review";
import Login from "./components/Login.js";

import "./App.css";
import "./style.css";
import "./index.css";

// Rendering and calling the API from React to the Express Server

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      reviews: [
        {
          name: "test restaurant",
          rating: 5,
          pic: "https://bulma.io/images/placeholders/256x256.png",
          blurb:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
        },
        {
          name: "test restaurant 2",
          rating: 5,
          pic: "https://bulma.io/images/placeholders/256x256.png",
          blurb:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
        }
      ],
      showLogin: false
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

        <Button className="Button is-danger is-outlined">
          Add Your Review
        </Button>
        {this.state.showLogin ? (
          <Login onSubmitLogin={this.onSubmitLogin} />
        ) : null}
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
