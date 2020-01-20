import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewRestaurant extends Component {
  render() {
    // const newRestaurant = this.props.currentName;
    return (
      <div>
        Restaurant Name:
        <input placeholder="Restaurant Name" style={{ width: "90%" }}></input>
        <br /> <br />
      </div>
    );
  }
}

export default NewRestaurant;
