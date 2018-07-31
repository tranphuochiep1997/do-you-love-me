import "./viewPage.css";
import React, { Component } from "react";
import ViewList from "../ViewList/ViewList";
import {connect} from "react-redux";
import {getAllUser} from "../../actions/userAction";

class ViewPage extends Component {

  componentDidMount(){
    getAllUser();
  }
  render() {
    const currentUserId = JSON.parse(localStorage.getItem("credentials")).user._id;
    let userWithoutCurrentUser = this.props.allUser.filter(user =>{
      return user._id !== currentUserId;
    });
    return (
      <div className="container">
        <ViewList {...this.props} listTitle="You may know" data={userWithoutCurrentUser} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    allUser: state.allUserReducer.users
  }
}

export default connect(mapStateToProps)(ViewPage);