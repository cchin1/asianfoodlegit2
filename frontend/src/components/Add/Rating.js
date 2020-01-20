import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewRating extends Component {
  render() {
    return (
      <div>
        Restaurant Rating:
        <input placeholder="1 - 5" style={{ width: "90%" }}></input>
        <br />
        <br />
      </div>
    );
  }
}

export default NewRating;
