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
      showLogin: false,
      showAddReview: false,
      id: 0,

      // this is just a test message from the backend
      statusMessage: null,

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
            {/*TODO - eventually this is the real text of the button */}
            {/*Add Your Review*/}

            {
              // TODO - change this back to "Add Your Review", currently it proves that the backend is working
              this.state.statusMessage
            }
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
    fetch(`${CONSTANTS.BACKEND_URL}/status`)
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState({ statusMessage: res.message });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("express_backend", {
      id: idToBeAdded,
      message: message
    });
  };
}

export default App;
