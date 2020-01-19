import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

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
      <div>
        <NewFoodPic />
        <NewRestaurant />
        <NewRating />
        <NewBlurb />
        <br />
        <button onClick={onSubmitReview}>Submit Review</button>
      </div>
    );
  }
}

export default Review;
