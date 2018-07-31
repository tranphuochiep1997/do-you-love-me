import "./viewPage.css";
import React, { Component } from "react";
import ViewList from "../ViewList/ViewList";

class ViewPage extends Component {

  render() {
    return (
      <div className="container">
        <ViewList {...this.props} listTitle="You may know" />
      </div>
    );
  }
}

export default ViewPage;