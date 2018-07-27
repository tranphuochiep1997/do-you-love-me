import React, { Component } from "react";
import "./navbarStyle.css";
import {connect} from "react-redux";
import {logout} from "../../actions/authenticationAction";
import {getUserProfile} from "../../actions/userAction";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount(){
    
    if (!this.props.user.name){
      getUserProfile();
    }
  }
  handleLogout(){
    logout();
  }
  render() {
    let {name, picture, status} = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Let's find friends...</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control form-control-md mr-sm-2 form-search-input"  type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary btn-md my-2 my-sm-0 form-search-button" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item my-auto  nav-item-profile">
              <div className="nav-link  wrap-name-status">
                <a className="nav-item-name" href="/profile/me" >{name}</a>
                <span className="nav-item-status" >{status || "..."}</span>
              </div>
            </li>
            <li className="nav-item my-auto nav-item-profile">
              <a className="nav-link" href="/profile/me" >
              <img style={{ objectFit: "cover", height: "40px", width: "40px", borderRadius: "32rem"}} 
              alt=""
              src={picture}/>
              </a>
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

const mapStateToProps = state =>{
  return {
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps)(Navbar);