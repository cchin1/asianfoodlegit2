import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../style.css";
import "../index.css";

class Banner extends Component {
  render() {
    return (
      <section id="page_header">
        <div className="page_title">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title upper">Our Legit</h2>
                <p>The Most Authentic Asian Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
