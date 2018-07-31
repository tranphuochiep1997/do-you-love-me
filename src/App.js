import React, { Component } from 'react';
import Login from "./views/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import PrivateRoute from "./helpers/PrivateRoute";
import UserProfile from "./views/UserProfile";
import {connect} from "react-redux";
import ChatRoom from "./views/ChatRoom";
import FriendProfile from './views/FriendProfile';
import Register from './views/Register';
import SearchPage from "./views/SearchPage";


class App extends Component {
  render() {
    return (     
      <Router>
        <Switch>
          <PrivateRoute exact path="/" loggedIn={this.props.loggedIn} component={Home} />
          <PrivateRoute exact path="/profile/me" loggedIn={this.props.loggedIn} component={UserProfile} />
          <PrivateRoute exact path="/profile/:id" loggedIn={this.props.loggedIn} component={FriendProfile} />
          <PrivateRoute exact path="/chat/:id" loggedIn={this.props.loggedIn} component={ChatRoom} />
          <PrivateRoute exact path="/search/:name" loggedIn={this.props.loggedIn} component={SearchPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.userReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
