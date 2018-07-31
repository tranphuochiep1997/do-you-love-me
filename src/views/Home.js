import React, { Component } from "react";
import ViewPage from "../components/ViewPage/ViewPage";
import Navbar from "../components/Navbar/Navbar";

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
          <Navbar history={this.props.history}/>
          <ViewPage {...this.props} />
        </div>
    );
  }
}

export default Home;