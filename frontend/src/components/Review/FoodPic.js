import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "./../../style.css";
import "./../../index.css";

class FoodPic extends Component {
  render() {
    const Pic = this.props.currentPic;

    return (
      <figure className="image is-3by2">
        <img src={Pic} />
        <br />
      </figure>
    );
  }
}

export default FoodPic;
