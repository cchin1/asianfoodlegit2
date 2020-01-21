import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewRestaurant extends Component {
  render() {
    const { updateRestaurant } = this.props;
    return (
      <div>
        Restaurant Name:
        <input
          placeholder="Restaurant Name"
          style={{ width: "90%" }}
          onChange={event => {
            updateRestaurant(
              event.target.value /*text is in event.target.value*/
            );
          }}
        ></input>
        <br /> <br />
      </div>
    );
  }
}

export default NewRestaurant;
