import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class NewBlurb extends Component {
  render() {
    return (
      <div>
        Write about your experience here:
        <textarea
          rows="4"
          cols="50"
          placeholder="How was your experience at this restaurant?"
          style={{ width: "90%", resize: "vertical" }}
        ></textarea>
        <br />
      </div>
    );
  }
}

export default NewBlurb;
