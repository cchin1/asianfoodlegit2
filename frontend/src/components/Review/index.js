import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import FoodPic from "./FoodPic.js";
import Blurb from "./Blurb.js";
import Rating from "./Rating.js";
import Restaurant from "./Restaurant";

import "./../../style.css";
import "./../../index.css";

class Review extends Component {
  render() {
    const { currentReview } = this.props;

    return (
      <section id="Card">
        <div className="columns">
          <div className="column is-two-fifths">
            <FoodPic currentPic={currentReview.pictureurl} />
          </div>
          <div className="column">
            <Restaurant currentName={currentReview.restaurant} />
            <div className="rating">
              <Rating currentRating={currentReview.rating} />
            </div>
            <Blurb currentBlurb={currentReview.blurb} />
          </div>
        </div>
      </section>
    );
  }
}

export default Review;
