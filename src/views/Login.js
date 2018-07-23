/*global FB*/
import React, {Component} from 'react';
import {connect} from "react-redux";
import FacebookButton from "../components/FacebookButton/FacebookButton";
import "../styles/loginStyle.css";

class Login extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="wrap-login">
        <p>Welcome to Do You Love Me</p>
        <FacebookButton {...this.props}/>
      </div>
    );
  }
}

export default Login;
