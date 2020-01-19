import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "./../../style.css";
import "./../../index.css";

import starPic from "./../../img/star.png";

class Rating extends Component {
  render() {
    const Rating = this.props.currentRating;
    const stars = [];
    const star = (
      <div>
        {/* <input name="stars" id="e5" type="radio" /> */}
        <img alt="rating" id="star" src={starPic} />
      </div>
    );

    // This Restaurant's Rating: {Rating} /5
    for (let i = 0; i < Rating; i++) {
      stars.push(star);
    }
    // return <div>{stars}</div>;
    return stars;
  }
}

export default Rating;
