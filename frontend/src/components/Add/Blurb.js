import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewBlurb extends Component {
  render() {
    return (
      <div>
        Write about your experience here:
        <input placeholder="?How was your experience at this restaurant?"></input>
        <br />
      </div>
    );
  }
}

export default NewBlurb;
