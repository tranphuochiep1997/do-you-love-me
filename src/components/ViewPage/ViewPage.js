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
    let {users} = this.props;
    return (
      <div className="container">
        <div className="row view-page">
          <div className="col-12 col-md-4 accepted-list">
            <ViewList listTitle="Recently" data={[]} />
          </div> 
          <div className="col-12 col-md-4 recommend-list">
            <ViewList listTitle="You may know" data={users} />
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
    users: state.allUserReducer.users
  }
}

export default connect(mapStateToProps)(ViewPage);