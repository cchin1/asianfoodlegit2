import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

import "../../style.css";
import "../../index.css";

var widget = null;

class NewFoodPic extends Component {
  checkUploadResult = resultEvent => {
    if (resultEvent.event === "success") {
      console.log(this.props.currentUser.id);
      this.props
        .postPhoto({
          user_id: this.props.currentUser.id,
          caption: "",
          url: resultEvent.info.secure_url
        })
        .then(this.props.history.push("/profile"));
    }
  };
  showWidget = () => {
    if (widget === null) {
      widget = window.cloudinary.createUploadWidget(
        {
          cloudname: "ohmydearcheesus",
          uploadPreset: "ml_default"
        },
        (error, result) => {}
      );
      widget.open();
    } else {
      widget.open();
    }
  };
  render() {
    return (
      <div>
        <Button
          id="upload_widget"
          className="cloudinary-button"
          onClick={this.showWidget}
        >
          Upload Photos
        </Button>
        <br />
        <br />
      </div>
    );
  }
}

export default NewFoodPic;
