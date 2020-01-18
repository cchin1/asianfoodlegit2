import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "./../../style.css";
import "./../../index.css";

class Review extends Component {
  render() {
    const { onSubmitReview } = this.props;
    return (
      <div>
        <input placeholder="write something"></input>
        <button onClick={onSubmitReview}>Submit Review</button>
      </div>
    );
  }
}

export default Review;
