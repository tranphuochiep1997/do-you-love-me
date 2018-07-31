import React, {Component} from 'react';
import {connect} from "react-redux";
import FacebookButton from "../components/FacebookButton/FacebookButton";
import FormRegister from "../components/FormRegister/FormRegister";

class Register extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div >
        <FormRegister history={this.props.history} />
      </div>
    );
  }
}

export default Register;
