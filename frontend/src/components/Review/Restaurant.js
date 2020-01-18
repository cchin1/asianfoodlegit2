import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

class Restaurant extends Component {
  render() {
    const Restaurant = this.props.currentName;
    return <h1 className="title is-3">{Restaurant}</h1>;
  }
}

export default Restaurant;
