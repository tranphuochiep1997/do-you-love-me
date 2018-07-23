import React, {Component} from "react";
import "./personView.css";

class PersonView extends Component {

  render(){
    return (
      <div className="person-view">
        <div className="person-view-wrap-img">
          <a href="#">
            <img src={this.props.picture} alt=""/>
          </a>
        </div>
        <div className="person-view-wrap-content">
          <a className="person-view-name" href="#">{this.props.name}</a>
          <p className="person-view-status">{this.props.status}</p>
        </div>
        <div className="person-view-wrap-message">
          <button type="button" value="Message">Message</button>
        </div>
      </div>
    );
  }
}

export default PersonView;