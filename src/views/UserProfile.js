import React, {Component} from "react";
import Navbar from "../components/Navbar/Navbar";
import PersonViewFull from "../components/PersonViewFull/PersonViewFull";
import {connect} from "react-redux";
import {getProfile} from "../actions/userAction";
import "../styles/userProfile.css";

class UserProfile extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    getProfile();
  }
  render(){
    return (
      <div>
        <Navbar {...this.props} />
        <div className="container" style={{marginTop: "10px"}}>
          <PersonViewFull {...this.props}/>
        </div>
      </div>
    );
  }
}
export default UserProfile;