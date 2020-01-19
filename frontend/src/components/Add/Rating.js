import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewRating extends Component {
  render() {
    return (
      <div>
        Rate the restaurant out of 5:
        <input placeholder="1 - 5"></input>
        <br />
      </div>
    );
  }
}

export default NewRating;
