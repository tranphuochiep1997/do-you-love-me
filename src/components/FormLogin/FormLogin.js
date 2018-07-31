import "./FormLogin.css";
import React, { PureComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {loginSuccess} from "../../actions/authenticationAction";
import {authService} from "../../services/authService";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submiting: false,
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      error: "",
      [name]: value
    })
  }
  async handleSubmit(event) {
    this.setState({
      submiting: true
    })
    event.preventDefault();
    let {email, password} = this.state;
    email = email.trim();
    password = password.trim();
    if (email && password){
      const response = await authService.login({email, password});
      if (!response.error){
        loginSuccess(response.data);
        this.props.history.push("/");
      } else {
        this.setState({
          error: response.message,
          submiting: false
        })
      }
    } else {
      this.setState({
        error: "Username and password can't be space",
        submiting: false
      });
      if (!email) {
        event.target.username.focus();
      } else {
        event.target.password.focus();
      }
    }
   }
  render() {
    return (
      <div className="container wrap-form-login">
        {
          this.state.error
          ?
          <div className="alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="lg" style={{margin: "0px 10px"}} />
            {this.state.error}
          </div>
          :
          <div className="alert alert-light" role="alert">
            ...
          </div>
        }
        <form className="form-login" onSubmit={this.handleSubmit}>
          <div className="form-login-title">
            <span>Please login to continue or <a href="/register">register</a></span>
          </div>
          <div className="form-group">
            <label htmlFor="InputEmail1">Email</label>
            <input type="email" className="form-control" id="InputEmail1" maxLength="200" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" maxLength="200" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" required />
          </div>  
          <button type="submit" disabled={this.state.submiting} className="btn btn-primary">Login</button>
        </form>
      </div>
      );
  }
}
export default FormLogin;