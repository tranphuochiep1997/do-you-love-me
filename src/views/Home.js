/*global FB*/
import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import ViewPage from "../components/ViewPage/ViewPage";
import {connect} from "react-redux";
import { getProfile } from "../actions/userAction";

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    getProfile();
  }
  render() {
    return (
        <div>
          <Navbar {...this.props}/>
          <ViewPage />
        </div>
    );
  }
}

export default Home;