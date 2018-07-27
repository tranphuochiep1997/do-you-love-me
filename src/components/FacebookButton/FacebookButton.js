/*global FB*/
import React, {Component} from "react";
import {loginSuccess} from "../../actions/authenticationAction";
import {userService} from "../../services/userService";
import "./facebookButtonStyle.css";

class FacebookButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      label: "Loading..."
    }
    this.redirectLoginSuccess = this.redirectLoginSuccess.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  redirectLoginSuccess(){
    this.props.history.push(`/`);
  }
  statusChangeCallback(response) {
    if (response.status === "connected"){
      let {userID, accessToken} = response.authResponse;
      loginSuccess({userID, accessToken});
      this.redirectLoginSuccess();
    } else {
      FB.login(async (responseInLogin) =>{
        if (responseInLogin.status === "connected"){
          let {userID, accessToken} = responseInLogin.authResponse;
          // let getUserResponse = await userService.getUserByFacebookId(responseInLogin.userID);

          // if (getUserResponse.error &&  getUserResponse.message === "user_not_exist") {
          //   FB.api("/me", {fields: "name, about, email"}, (userApiCall)=>{
          //     userApiCall.facebookId = userApiCall.id;
          //     delete userApiCall.id;
          //     userService.createNewUser(userApiCall);
          //   })
          // } else {
          //   console.log("Error when login facebook");
          // }

          loginSuccess({userID, accessToken});
          this.redirectLoginSuccess();
        }
      }, {scope: 'email'});
    }
  }
  componentDidMount(){
    window.fbAsyncInit = function () {
      FB.init({
        appId: '626713064376073',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
      });      
      FB.getLoginStatus(response =>{
        let label = "";
        if (response.status === "connected"){
          label = "Continue with facebook";
        } else {
          label = "Login with facebook";
        }
        this.setState({
          label: label
        });
      })
    }.bind(this);
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=626713064376073';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  handleLogin(){
    FB.getLoginStatus(response =>{
      this.statusChangeCallback(response);
    })
  }
  render(){
    return (
      <button className="facebookButton" onClick={this.handleLogin}>{this.state.label}</button>
    );
  }
}

export default FacebookButton;