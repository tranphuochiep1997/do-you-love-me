import "./FormRegister.css";
import React, { PureComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {authService} from "../../services/authService";
import {loginSuccess} from "../../actions/authenticationAction";

class FormRegister extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      submiting: false,
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidate =  this.handleValidate.bind(this);
  }
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      error: "",
      [name]: value
    })
  }
  handleValidate(event){
    event.preventDefault();
    this.setState({
      submiting: true
    });
    let {email, password, passwordConfirm} = this.state;
    email = email.trim();
    password = password.trim();
    passwordConfirm = passwordConfirm.trim();
    if (email && password){
      if (password === passwordConfirm){
        return true;
      } else {
        this.setState({
          error: "Password and password confirm must be the same!",
          submiting: false
        });
        event.target.passwordConfirm.focus();
      }
    } else {
      if (!email) {
        this.setState({
          error: "Username can't be space!",
          submiting: false
        });
        event.target.email.focus();
      } else if (!password) {
        this.setState({
          error: "Password can't be space!",
          submiting: false
        });
        event.target.password.focus();
      }
      return false;
    }
  }
  async handleSubmit(event) {
    if (this.handleValidate(event)){
      let {email, password} = this.state;
      const registerResponse = await authService.register({email, password});
      if (!registerResponse.error){
        this.props.history.push("/login");
      } else {
        this.setState({
          error: registerResponse.message,
          submiting: false
        })
      }
    }
  }
  render() {
    return (
      <div className="container wrap-form-register">
        {
          this.state.error
          ?
          <div className="alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="lg" style={{margin: "0px 10px"}} />
            {this.state.error}
          </div>
          :
          <div className="alert alert-light">
          ...
          </div>
        }
        <form className="form-register" onSubmit={this.handleSubmit}>
          <div className="form-register-title">
            <span>Please provide username and password or <a href="/login">login</a></span>
          </div>
          <div className="form-group">
            <label htmlFor="InputUsername">Email</label>
            <input type="email" className="form-control" id="InputUsername" maxLength="200" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input type="password" className="form-control" id="InputPassword" maxLength="200" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" required/>
          </div>  
          <div className="form-group">
            <label htmlFor="InputPasswordConfirm">Confirm Password</label>
            <input type="password" className="form-control" id="InputPasswordConfirm" maxLength="200" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} placeholder="Enter password again" required/>
          </div>  
          <button type="submit" disabled={this.state.submiting} className="btn btn-primary">Register</button>
        </form>
      </div>
      );
  }
}
export default FormRegister;