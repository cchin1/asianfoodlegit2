import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { CONSTANTS } from "./../../constants";

import NewFoodPic from "./FoodPic.js";
import NewRestaurant from "./Restaurant.js";
import NewRating from "./Rating.js";
import NewBlurb from "./Blurb.js";

import "./../../style.css";
import "./../../index.css";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureurl: "",
      rating: null,
      restaurant: "",
      blurb: ""
    };
  }
  updatePictureUrl = url => {
    this.setState({ pictureurl: url });
  };
  updateRating = value => {
    this.setState({ rating: value });
  };
  updateRestaurant = name => {
    this.setState({ restaurant: name });
  };
  updateBlurb = text => {
    this.setState({ blurb: text });
  };
  sendReview = review => {
    fetch(`${CONSTANTS.BACKEND_URL}/review`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(review)
    })
      .then(response => {
        console.log(response.statusText);
        return;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { onSubmitReview } = this.props;
    return (
      <div className="modal is-active" id="login">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="field">
              <NewRestaurant updateRestaurant={this.updateRestaurant} />
              <NewRating updateRating={this.updateRating} />
              <NewBlurb updateBlurb={this.updateBlurb} />
              <br />
              <NewFoodPic updatePictureUrl={this.updatePictureUrl} />
              <Button
                className="Button is-danger is-outlined"
                onClick={() => {
                  this.sendReview(this.state);
                  onSubmitReview();
                }}
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
