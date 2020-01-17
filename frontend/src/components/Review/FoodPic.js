import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class FoodPic extends Component {
  render() {
    const Pic = this.props.currentPic;

    return (
      <div className="Column is-two-fifths">
        <figure className="image is-3by2">
          <img src={Pic} />
        </figure>
        <br />
      </div>
    );
  }
}

export default FoodPic;
