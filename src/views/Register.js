import React, {Component} from 'react';
import FormRegister from "../components/FormRegister/FormRegister";

class Register extends Component {
  render(){
    return (
      <div >
        <FormRegister history={this.props.history} />
      </div>
    );
  }
}

export default Register;
