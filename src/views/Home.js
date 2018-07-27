/*global FB*/
import React, { Component } from "react";
import ViewPage from "../components/ViewPage/ViewPage";

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
          {/* <Navbar {...this.props}/> */}
          <ViewPage {...this.props} />
        </div>
    );
  }
}

export default Home;