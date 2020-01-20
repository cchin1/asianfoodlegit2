import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import NewFoodPic from "./FoodPic.js";
import NewRestaurant from "./Restaurant.js";
import NewRating from "./Rating.js";
import NewBlurb from "./Blurb.js";

import "./../../style.css";
import "./../../index.css";

class Review extends Component {
  render() {
    const { onSubmitReview } = this.props;
    return (
      <div className="modal is-active" id="login">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="field">
              <NewRestaurant />
              <NewRating />
              <NewBlurb />
              <br />
              <NewFoodPic />
              <Button className="Button is-danger" onClick={onSubmitReview}>
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
