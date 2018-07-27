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
    let {allUser, user} = this.props;
    let removeCurrentUser = allUser.filter(queryUser => queryUser.facebookId !== user.facebookId);
    return (
      <div className="container">
        <div className="row view-page">
          <div className="col-12 col-md-4 accepted-list">
            <ViewList listTitle="Recently" data={[]} />
          </div> 
          <div className="col-12 col-md-4 recommend-list">
            <ViewList {...this.props} listTitle="You may know" data={removeCurrentUser} />
          </div> 
          <div className="col-12 col-md-4 received-list">
            <ViewList listTitle="Received" data={[]} />
          </div> 
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    allUser: state.allUserReducer.users,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(ViewPage);