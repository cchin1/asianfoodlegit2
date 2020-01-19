import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "../../style.css";
import "../../index.css";

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
  showWidget = widget => {
    widget.open();
  };
  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudname: "ohmydearcheesus",
        uploadPreset: "ml_default"
      },
      (error, result) => {}
    );
    return (
      <div>
        <button
          id="upload_widget"
          class="cloudinary-button"
          onClick={this.showWidget}
        >
          Upload Photos
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default NewFoodPic;
