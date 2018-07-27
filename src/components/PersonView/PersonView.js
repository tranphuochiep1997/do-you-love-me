import React, {Component} from "react";
import "./personView.css";
import { getFriendProfile } from "../../actions/friendAction";

class PersonView extends Component {
  constructor(props){
    super(props);
    this.handleClickMessage = this.handleClickMessage.bind(this);
  }
  handleClickMessage(){
    this.props.history.push(`/chat/${this.props.facebookId}`);
  }
  render(){
    let {picture, name, status, facebookId} = this.props;
    return (
      <div className="person-view">
          <div className="person-view-wrap-img">
            <a href={`/profile/${facebookId}`}>
              <img src={picture} alt=""/>
            </a>
          </div>
          <div className="person-view-wrap-content">
            <a className="person-view-name" href={`/profile/${facebookId}`}>{name}</a>
            <p className="person-view-status">{status || "..."}</p>
          </div>
          <div className="person-view-wrap-message">
            <button onClick={this.handleClickMessage} type="button" value="Message">Message</button>
          </div>
      </div>
    );
  }
}

export default PersonView;