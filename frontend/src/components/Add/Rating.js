import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewRating extends Component {
  render() {
    const { updateRating } = this.props;
    return (
      <div>
        Restaurant Rating:
        <input
          placeholder="1 - 5"
          style={{ width: "90%" }}
          onChange={event => updateRating(event.target.value)}
        ></input>
        <br />
        <br />
      </div>
    );
  }
}

export default NewRating;
