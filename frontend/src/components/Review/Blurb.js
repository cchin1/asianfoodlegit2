import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class Blurb extends Component {
  render() {
    const Blurb = this.props.currentBlurb;
    return (
      <div className="review">
        <div>
          <div>{Blurb}</div>
        </div>
      </div>
    );
  }
}

export default Blurb;
