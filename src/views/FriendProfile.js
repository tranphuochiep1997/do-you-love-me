import React, { Component } from "react";
import FriendInfo from "../components/FriendInfo/FriendInfo";
import {connect} from "react-redux";
import {getFriendProfile} from "../actions/friendAction";

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
        <div className="container" style={{ marginTop: "10px" }}>
          <FriendInfo {...this.props.friendProfile} />
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
// const mapDispatchToProps = dispatch =>{
//   return {
//     getFriendProfile: (userId)=> dispatch(getFriendProfile(userId))
//   }
// }
export default connect(mapStateToProps)(FriendProfile);