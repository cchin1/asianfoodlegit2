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
          pic: "https://i.giphy.com/media/zm1Hm7xViBfG/giphy.webp",
          blurb:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
        },
        {
          name: "test restaurant 2",
          rating: 4,
          pic:
            "https://media0.giphy.com/media/tbMG1SxlOIIF2/giphy.gif?cid=790b7611b152b4df06208b57f64eb192d7d1231e1d3650c5&rid=giphy.gif",
          blurb: "best restaurant ever"
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
      showLogin: false,
      addReview: false
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
        <section id="review">
          <Button className="Button is-danger is-outlined">
            Add Your Review
          </Button>
        </section>
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
