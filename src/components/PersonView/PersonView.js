import React, {Component} from "react";
import "./personView.css";
import {Link} from "react-router-dom";

class PersonView extends Component {
  constructor(props){
    super(props);
    this.handleClickMessage = this.handleClickMessage.bind(this);
  }
  handleClickMessage(){
    this.props.history.push(`/chat/${this.props._id}`);
  }
  render(){
    let {picture, name, status, _id} = this.props;
    return (
      <div className="person-view">
        <div className="person-view-left">
          <div className="person-view-wrap-img">
            <Link to={`/profile/${_id}`}>
              <img className="pewson-view-picture" src={picture} alt=""/>
            </Link>
          </div>
          <div className="person-view-wrap-content">
            <Link className="person-view-name" to={`/profile/${_id}`}>{name}</Link>
            <p className="person-view-status">{status || "..."}</p>
          </div>
        </div>
        <div className="person-view-wrap-message">
          <button className="btn btn-outline-success btn-md" onClick={this.handleClickMessage} type="button" value="Message">Message</button>
        </div>
      </div>
    );
  }
}

export default PersonView;