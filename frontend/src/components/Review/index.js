import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import FoodPic from "./FoodPic";

import "../../style.css";
import "../../index.css";

class Review extends Component {
  render() {
    const currentReview = this.props;

    return (
      <section id="review">
        <section id="Card">
          <div className="Columns">
            <FoodPic currentPic={currentReview.currentReview.pic} />
          </div>
          <div className="Column">
            <h1 className="title is-3">Name:</h1>
            <div className="rating">
              <input name="stars" id="e5" type="radio" />
              <label for="e5">☆</label>
              <input name="stars" id="e4" type="radio" />
              <label for="e4">☆</label>
              <input name="stars" id="e3" type="radio" />
              <label for="e3">☆</label>
              <input name="stars" id="e2" type="radio" />
              <label for="e2">☆</label>
              <input name="stars" id="e1" type="radio" />
              <label for="e1">☆</label>
            </div>

            <div className="review">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Review;
