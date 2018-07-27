import React, { Component } from 'react';
import Login from "./views/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import PrivateRoute from "./helpers/PrivateRoute";
import UserProfile from "./views/UserProfile";
import {connect} from "react-redux";
import ChatRoom from "./views/ChatRoom";
import Navbar from './components/Navbar/Navbar';
import FriendProfile from './views/FriendProfile';


class App extends Component {
  render() {
    return (     
      <div>
      {
        this.props.loggedIn ? <Navbar /> : null
      } 
      <Router>
        <Switch>
          <PrivateRoute exact path="/" loggedIn={this.props.loggedIn} component={Home} />
          <PrivateRoute exact path="/profile/me" loggedIn={this.props.loggedIn} component={UserProfile} />
          <PrivateRoute exact path="/profile/:id" loggedIn={this.props.loggedIn} component={FriendProfile} />
          <PrivateRoute exact path="/chat/:id" loggedIn={this.props.loggedIn} component={ChatRoom} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.authenticationReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
