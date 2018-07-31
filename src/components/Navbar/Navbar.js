import React, { Component } from "react";
import "./navbarStyle.css";
import {connect} from "react-redux";
import {logout} from "../../actions/authenticationAction";
import FormSearch from "../FormSearch/FormSearch";
import {Link} from "react-router-dom";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    logout();
  }
  render() {
    let {name, picture, status} = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Let's find friends...</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
          <FormSearch {...this.props} />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item my-auto  nav-item-profile">
              <div className="nav-link  wrap-name-status">
                <Link className="nav-item-name" to="/profile/me" >{name}</Link>
                <span className="nav-item-status" >{status || "..."}</span>
              </div>
            </li>
            <li className="nav-item my-auto nav-item-profile">
              <Link className="nav-link" to="/profile/me" >
              <img style={{ objectFit: "cover", height: "40px", width: "40px", borderRadius: "32rem"}} 
              alt=""
              src={picture}/>
              </Link>
            </li>
            <li className="nav-item dropdown nav-item-dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button onClick={this.handleLogout} className="dropdown-item">Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Navbar.defaultProps = {
  user: {}
}
const mapStateToProps = state =>{
  return {
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps)(Navbar);