import React, { Component } from "react";
import FriendInfo from "../components/FriendInfo/FriendInfo";
import {connect} from "react-redux";
import {getFriendProfile} from "../actions/friendAction";
import Navbar from "../components/Navbar/Navbar";

class FriendProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    getFriendProfile(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history}/>
        <div className="container" style={{ marginTop: "10px" }}>
          <FriendInfo {...this.props.friendProfile} history={this.props.history} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    friendProfile: state.friendReducer.friendProfile
  }
}
export default connect(mapStateToProps)(FriendProfile);