import React, {Component} from 'react';
// import {connect} from "react-redux";
// import FacebookButton from "../components/FacebookButton/FacebookButton";
import "../styles/loginStyle.css";
import FormLogin from "../components/FormLogin/FormLogin";

class Login extends Component {
  render(){
    return (
      <div className="wrap-login">
        <FormLogin history={this.props.history} />
      </div>
    );
  }
}

export default Login;
